import { expressjwt as jwt } from 'express-jwt';

export const useJwt = (config) => jwt(config)