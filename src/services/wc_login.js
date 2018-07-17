import { stringify } from 'qs';
import request from '../utils/request';

export async function login(params) {
  return request('web/login', {
    method: 'POST',
    body: {
      ...params,
      method: 'POST',
    },
  });
}

export async function logout() {
  return request('web/logout');
}
