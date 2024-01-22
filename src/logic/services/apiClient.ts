"use client";
import axios from 'axios';
import { API_BASE_URL } from '../config';

// export const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     "Accept": "application/json",
//   },
// });

export const client = (() => {
  return axios.create({
    baseURL: API_BASE_URL.baseURL,
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    },
  });
})();

export const apiClient = async function (options) {
  let accessTokenObj = localStorage.getItem('token') ?? ''

  console.log(accessTokenObj)
  if (accessTokenObj) {
    client.defaults.headers.common['Authorization'] = `Bearer ${accessTokenObj}`;
  }

  const onSuccess = function (response) {
    const { data } = response;
    return data;
  };
  const onError = function (error) {
    return Promise.reject(error.response);
  };
  return client(options).then(onSuccess).catch(onError);
};

export const fileClient = (() => {
  return axios.create({
    baseURL: API_BASE_URL.baseURL,
    headers: {
      'Content-Type': 'multipart/form-data',
      "Accept": "application/json",
    },
  });
})();


export const fileApiClient = async function (options) {
  // const appstate = await AsyncStorage.getItem('app-state');
  // const token = appstate && JSON.parse(appstate).state.token
  // if (token) {
  //   client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }

  const onSuccess = function (response) {
    const { data } = response;
    return data;
  };
  const onError = function (error) {
    return Promise.reject(error.response);
  };
  return fileClient(options).then(onSuccess).catch(onError);
};
