import React from "react";
// import { AuthenticatedUserAction, IAuthenticatedUser } from "../../types"
// import * as actionTypes from "./actionTypes"
// import JWT from 'jsonwebtoken'

// const initialState: IAuthenticatedUser = {
//     isAuth: false,
//     token: null,
//     user: null,
//     lastPath: null
// }

// const reducer = (
//     state: IAuthenticatedUser = initialState,
//     action: AuthenticatedUserAction
//   ): IAuthenticatedUser => {
//     switch (action.type) {
//       case actionTypes.RENEW_TOKEN:
//         const updatedToken = JWT.sign(state, 'aipai', {
//             expiresIn:'2m'
//         });
//         return {
//           ...state,
//           token: updatedToken,
//         }
//     }
//     return state
//   }
  
//   export default reducer