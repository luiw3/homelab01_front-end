import { IAuthenticatedUser, AuthenticatedUserAction, DispatchAuthenticatedUser } from '../../types';
import * as actionTypes from './actionTypes';

export const renewToken = (currentUser: IAuthenticatedUser) => {
    const action: AuthenticatedUserAction = {
        type: actionTypes.RENEW_TOKEN,
        authenticatedUser: currentUser
    }
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: AuthenticatedUserAction) {
    return (dispatch: DispatchAuthenticatedUser) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }