import { IHeader } from '@/models';

const axios = require('axios');

let HEADERS: IHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

let HEADERS_MULTIPLE_PART: IHeader = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};

const TIMEOUT = 30000;

export const setToken = (token: string) => {
  HEADERS = {
    ...HEADERS,
    Authorization: 'Bearer ' + token,
  };
  HEADERS_MULTIPLE_PART = {
    ...HEADERS_MULTIPLE_PART,
    Authorization: 'Bearer ' + token,
  };
};

// method post
function post<IRequest, IResponse>(endpoint: string, params: IRequest) {
  return axios.default
    .post(endpoint, params, {
      headers: HEADERS,
      timeout: TIMEOUT,
    })
    .then(
      (response: IResponse) => {
        return response;
      },
      (err: any) => {
        return err;
      },
    )
    .catch((err: any) => {
      return err;
    });
}

// method get
function get<IRequest, IResponse>(endpoint: string, params: IRequest) {
  return axios.default
    .get(endpoint, {
      params: params,
      headers: HEADERS,
      timeout: TIMEOUT,
    })
    .then(
      (response: IResponse) => {
        return response;
      },
      (err: any) => {
        return err;
      },
    )
    .catch((err: any) => {
      return err;
    });
}

// method put
function put<IRequest, IResponse>(endpoint: string, params: IRequest) {
  return axios.default
    .put(endpoint, params, {
      headers: HEADERS,
      timeout: TIMEOUT,
    })
    .then(
      (response: IResponse) => {
        return response;
      },
      (err: any) => {
        return err;
      },
    )
    .catch((err: any) => {
      return err;
    });
}

// method delete
function apiDelete<IRequest, IResponse>(endpoint: string, params: IRequest) {
  return axios.default
    .delete(endpoint, {
      params: params,
      headers: HEADERS,
      timeout: TIMEOUT,
      validateStatus: (status: number) =>
        status === 200 || status === 400 || status === 500,
    })
    .then(
      (response: IResponse) => {
        return response;
      },
      (err: any) => {
        return err;
      },
    )
    .catch((err: any) => {
      return err;
    });
}

export { apiDelete, post, get, put };
