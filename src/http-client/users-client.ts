import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { camelToSnake } from '@/utils/index';
import { decode } from '@/utils/custom-enc-dec';

const URL_DIGIUSERS = process.env.VUE_APP_URL_DG_USERS;

const baseHttpClient = axios.create({
  baseURL: URL_DIGIUSERS,
  headers: {
    'Content-Type': 'application/json',
  },
});

function customErrorHandler(error: any) {
  if (!error.response) {
    console.error('Network error', error);
    return error;
  }

  switch (error.response.status) {
    case 401: {
      // localStorage.removeItem('token');
      // window.location.href = '/auth/login';
      break;
    }
    case 403:
      console.error('Forbidden');
      break;
    case 404:
      console.error('Not found');
      break;
    case 500:
      console.error('Internal server error');
      break;
    default:
      console.error('Unknown error', error);
  }

  return error;
}

const customPost = async <T = any, D = any>(
  url: string,
  data: D | undefined,
  config: AxiosRequestConfig<D> | undefined,
): Promise<AxiosResponse<T>> => {
  const snakeData = camelToSnake(data);
  const response = await baseHttpClient({
    method: 'POST',
    url,
    data: snakeData,
    ...config,
  });
  return response;
};

baseHttpClient.interceptors.request.use((config) => {
  const modifiedConfig = config;

  const token = localStorage.getItem('token');
  if (token) {
    modifiedConfig.headers.Authorization = `DGTK ${token}`;
  }

  const project = localStorage.getItem('project');
  if (project) {
    const { value } = decode(project);
    const pro = value as { [key: string]: any };
    const projectId = pro.ID;
    modifiedConfig.headers['Dg-Businessid'] = projectId;
  }

  return modifiedConfig;
});

baseHttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    customErrorHandler(error);
    return Promise.reject(error);
  },
);

export const httpClient = Object.assign(baseHttpClient, {
  post: customPost,
});
