import { LOGIN, LOGOUT } from './AuthActions';

// Initial State
const initialState = {
  credentials: {
    email: 'a',
    password: 'b'
  },
  message: ''
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN :
      return Object.assign({}, state, { credentials: action.credentials, message: action.result.message });

    case LOGOUT :
      return Object.assign({}, state, { message: action.result.message });

    default:
      return state;
  }
};

/* Selectors */

export const getLogin = (state) => state.credentials;

// Export Reducer
export default AuthReducer;
