
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b3282b058c6e452b983b37ccbbd56fa8',
  appName: 'weight-wizard-convertor-pro',
  webDir: 'dist',
  server: {
    url: 'https://b3282b05-8c6e-452b-983b-37ccbbd56fa8.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#E6F0FF",
      showSpinner: true,
      spinnerColor: "#2563EB",
      androidSpinnerStyle: "large",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
