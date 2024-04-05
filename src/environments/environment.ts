import { type ResourcesConfig } from 'aws-amplify';

export const environments: ResourcesConfig['Auth'] = {
    Cognito: {
        userPoolId: 'eu-west-2_KlkzMdq1Q',
        userPoolClientId: '6p5rp57a7oe2og0d47a4g3922q'
    }
};

