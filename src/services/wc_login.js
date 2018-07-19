import { stringify } from 'qs';
import request from '../utils/request';
import { getToken } from '../utils/authority';

export async function login(params) {
  return request('web/login', {
    method: 'POST',
    headers:{
      'token':getToken(),
    },
    body: {
      ...params,
      method: 'POST',
    },
  });
}

export async function logout() {
  return request('web/logout');
}
