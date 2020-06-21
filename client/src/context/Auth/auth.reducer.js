import { REGISTER_SUCCESS, REGISTER_FAILED } from './../types';

export default function AuthReducer(state, { type, payload }) {
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, ...payload };
    case REGISTER_FAILED:
      return { ...state, loading: false, isAuthenticated: false, ...payload };
    default:
      return state;
  }
}
