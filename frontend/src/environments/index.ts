import * as value from './environment';

export interface Environment {
    production: boolean;
    backendURL: string;
}

export const environment = value.environment;
