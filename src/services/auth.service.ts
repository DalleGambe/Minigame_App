import {Injectable} from '@angular/core';
import {FirebaseAuthentication} from '@capacitor-firebase/authentication';
import {Router} from '@angular/router';
import {Auth, signInWithCredential, signOut, Unsubscribe} from '@angular/fire/auth';
import {updateProfile, GoogleAuthProvider, GithubAuthProvider, User} from 'firebase/auth';
import {Capacitor} from '@capacitor/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<null | User> = new BehaviorSubject<null | User>(undefined);
  #verificationId: string;
  #authUnsubscribe: Unsubscribe;

  constructor(private auth: Auth, private router: Router) {
    this.#authUnsubscribe = this.auth.onAuthStateChanged(user => this.setCurrentUser(user));
  }

  isLoggedIn(): boolean {
    return this.currentUser.value !== null && this.currentUser.value !== undefined;
  }

  getProfilePic(): string {
    const placeholder = '/assets/Portrait_Placeholder.png';
    if (!this.isLoggedIn()) {
      return placeholder;
    }
    return this.currentUser.value.photoURL ? this.currentUser.value.photoURL : placeholder;
  }

  getDisplayName(): string | undefined {
    return this.isLoggedIn() ? this.currentUser.value.displayName : undefined;
  }

  getEmail(): string | undefined {
    return this.isLoggedIn() ? this.currentUser.value.email : undefined;
  }

  getUserUID(): string | undefined {
    return this.isLoggedIn() ? this.currentUser.value.uid : undefined;
  }

  async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();

    if (Capacitor.isNativePlatform()) {
      await signOut(this.auth);
    }
  }

  async signInWithGoogle(): Promise<void> {
    // Sign in on the native layer.
    const {credential: {idToken}} =
      await FirebaseAuthentication.signInWithGoogle();

    // Sign in on the web layer.
    if (Capacitor.isNativePlatform()) {
      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(this.auth, credential);
    }
  }
  async signInWithGithub(): Promise<void> {
    // Sign in on the native layer.
    const authResult = await FirebaseAuthentication.signInWithGithub();
    if (!authResult?.credential?.accessToken) {
      return;
    }


    await this.updateDisplayName(authResult?.additionalUserInfo?.username ?? '');
    // Sign in on the web layer.
    if (Capacitor.isNativePlatform()) {
      const credential = GithubAuthProvider.credential(authResult.credential.accessToken);
      await signInWithCredential(this.auth, credential);
    }
  }
  async updateDisplayName(displayName: string): Promise<void> {
    await updateProfile(this.auth.currentUser, {
      displayName
    });
  }
  private async setCurrentUser(user: User): Promise<void> {
    this.currentUser.next(user);
    if (this.currentUser.value) {
      await this.router.navigate(['tabs/tabMenu']);
    }
  }
}
