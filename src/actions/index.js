import { UPDATE_AUTH } from './types';

export const authenticate = (signInStatus) => {
  return {
    type: UPDATE_AUTH,
    payload: signInStatus
  };
};
