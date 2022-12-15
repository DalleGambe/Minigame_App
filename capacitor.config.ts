import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'r0896931.mobile.minigame.app',
  appName: 'Mobile Minigame App',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // Onderstaande lijn genereert een linting fout
    // Hier is niets aan te doen, behalve deze te negeren.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['github.com', 'google.com'],
    },
  }
};

export default config;
