import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MinigameDataService} from '../../../../services/minigameData.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.page.html',
  styleUrls: ['./choose-name.page.scss'],
})
export class ChooseNamePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private route: Router, public minigameData: MinigameDataService, public formBuilder: FormBuilder,
              private alertController: AlertController) {
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  //Maakt een formgroep aan samen met hun validators
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      playerOne: ['', [Validators.required, Validators.minLength(2)]],
      playerTwo: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  submitForm() {
    //Laat het programma weten dat er een form is verstuurd
    this.isSubmitted = true;
    //Checks if everything is valid
    return this.ionicForm.valid;
  }

  goToRpsArena() {
    let errors;
    if (this.submitForm() === true) {
      //if both name fields are filled in
      this.minigameData.setPlayernames(this.ionicForm.get('playerOne').value, this.ionicForm.get('playerTwo').value);
      this.route.navigate(['tabs/tabRPS/rpsTabs/rps-arena']).then();
    } else {
      //check wat er fout is en toon dit in een alert
      errors = this.controleValidatieFouten();
      this.presentErrorMessage(errors).then();
    }
  }
  //Controleert welke fouten er juist zijn
  //De gevonden fouten worden teruggestuurd en getoond aan de gebruiker in een array.
  controleValidatieFouten()
  {
    let errors = '';
    if(this.errorControl.playerOne.errors?.required || this.errorControl.playerTwo.errors?.required)
    {
      errors  += 'Beide spelers moeten een naam hebben!';
    }
    if(this.errorControl.playerOne.errors?.minlength || this.errorControl.playerTwo.errors?.minlength)
    {
      errors += 'Een spelers naam moet minstens 2 tekens lang zijn!';
    }
    return errors;
  }

  //Alert dat getoond wordt aan de gebruiker
  async presentErrorMessage(errorMessage) {
    const alert = await this.alertController.create({
      header:'Error',
      subHeader: 'Oei! Er ging iets mis!',
      message: errorMessage,
      buttons: [
        {
          text: 'Natuurlijk!',
          role: 'confirm',
        },
      ],
    });
    await alert.present();
  }
}
