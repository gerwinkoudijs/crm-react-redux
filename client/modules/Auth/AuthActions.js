import callApi from '../../util/apiCaller';

// Export Constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Export Actions
export function login(credentials, result) {
  return {
    type: LOGIN,
    credentials,
    result,
  };
}

export function logout(credentials, result) {
  return {
    type: LOGOUT,
    credentials,
    result,
  };
}

export function loginRequest(credentials) {
  return (dispatch) => {
    return callApi('auth/login', 'post', { credentials: credentials }).then(res => dispatch(login(credentials, res)));
  };
}
