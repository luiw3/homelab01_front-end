import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {createStore, Store, applyMiddleware, Dispatch} from 'redux';
// import { Provider, useDispatch } from 'react-redux';
// import thunk from 'redux-thunk'
// import { AuthenticatedUserAction, DispatchAuthenticatedUser, IAuthenticatedUser } from "../types";
// import reducer from "../store/authStore/authReducer";
// import * as actionTypes from "../store/authStore/actionCreators";



// const store: Store<IAuthenticatedUser, AuthenticatedUserAction> & {
//     dispatch: DispatchAuthenticatedUser
//   } = createStore(reducer, applyMiddleware(thunk))

// export const AuthComponent = ({children} : {children: React.ReactNode}) => {
//     const location = useLocation();
    
//     useEffect(() => {
//         console.log('acessou aqui', location.pathname);
//     })
//     return (
//         <>
//             {children}
//         </>
//     )
// }