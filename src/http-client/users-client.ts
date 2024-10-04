import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { camelToSnake } from '@/utils/index';

const ENVIRONMENT = process.env.VUE_APP_ENVIRONMENT ?? 'DEV';
const URL_DIGIUSERS = process.env[`VUE_APP_URL_DG_USERS_${ENVIRONMENT}`];

const baseHttpClient = axios.create({
  baseURL: URL_DIGIUSERS,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export const httpClient = Object.assign(baseHttpClient, {
  post: customPost,
});
