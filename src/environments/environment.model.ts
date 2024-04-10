export interface Environment {
  production: boolean;
  amplify?: {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
  };
}
