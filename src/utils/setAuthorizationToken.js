import axios from 'axios';

export default function setAuthToken(accessToken) {
  if (accessToken) {
    axios.defaults.headers.common.token = accessToken;
  } else {
    delete axios.defaults.headers.common.accessToken;
  }
}