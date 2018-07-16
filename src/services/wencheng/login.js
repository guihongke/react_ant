import { stringify } from 'qs';
import request from '../../utils/request';

export async function login(params) {
  return request('/login', {
    method: 'POST',
    body: {
      ...params,
      method: 'POST',
    },
  });
}

export async function logout() {
  return request('/logout');
}
