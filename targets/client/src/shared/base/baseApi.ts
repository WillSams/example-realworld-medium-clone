import axios, { AxiosResponse } from 'axios';
import { Store } from 'redux';

import { actionTypes } from '@/shared/base';

let instance: any = null;

const createInstance = (url: string) => {
  return axios.create({
    baseURL: `${url}`,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
};

const handleRequest = (config: any, store: Store) => {
  store.dispatch({ type: actionTypes.API_REQUEST });
  return config;
};

const handleRequestError = (error: any, store: Store) => {
  store.dispatch({ type: actionTypes.API_REQUEST_ERROR, error });
  return Promise.reject(error);
};

const handleResponse = (response: any, store: Store) => {
  store.dispatch({ type: actionTypes.API_REQUEST_DONE });
  return response?.data || response;
};

const handleResponseError = (error: any, store: Store) => {
  const { message, name } = error;
  store.dispatch({ type: actionTypes.API_REQUEST_DONE });
  store.dispatch({
    type: actionTypes.API_REQUEST_ERROR,
    error: { message, name },
  });
  return Promise.reject(error);
};

export const createBaseApi = async (url: string, store: Store) => {
  try {
    instance = createInstance(url);

    instance.interceptors.request.use(
      (config: any) => handleRequest(config, store),
      (error: any) => handleRequestError(error, store),
    );
    instance.interceptors.response.use(
      (response: any) => handleResponse(response, store),
      (error: any) => handleResponseError(error, store),
    );

    return instance;
  } catch (error) {
    //console.error('Error fetching token:', error);
    return error;
  }
};

export const getBaseApi = () => {
  if (instance == null) throw new Error('Base API not initialized.');
  return instance;
};
