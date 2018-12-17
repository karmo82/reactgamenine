import * as actionTypes from './action-types';
import * as authServices from '../services/auth.services';

export function getActionUserLogged(user){
    return {
        type: actionTypes.AUTHLOGIN_REQUEST,
        data: user
    }
}

export function login(username, pwd){
    return function(dispatch){
        authServices.login(username, pwd).then(
            result => {
                console.info("login ok");
                dispatch(getActionUserLogged(result));
            },
            error => {
                console.log(error);
            }
        );
    }
}