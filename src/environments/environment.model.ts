export interface Environment {
  production: boolean;
  amplify?: {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
  };
}


// Path: src/environments/environment.model.ts