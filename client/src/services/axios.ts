import { ENV } from '@/config/env';
import { AxiosResponseData } from '@/types/responseTypes';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const instance: AxiosInstance = axios.create({
  baseURL: ENV.url,
});
instance.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  (error: AxiosError) => {
    return {
      code: error.code,
      status: error.response?.status,
      message: error.message,
    };
  }
);
export const getData = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponseData[]> => {
  try {
    const res: AxiosResponse = await instance.get(url, config);
    return res.data;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error?.message);
  }
};

export const postData = async (url: string, data: object, config?: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse = await instance.post(url, data, config);
    return res.data;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error?.message);
  }
};
export const putData = async (url: string, data: object, config?: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse = await instance.put(url, data, config);
    return res.data;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error?.message);
  }
};
export const patchData = async (url: string, data: object, config?: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse = await instance.patch(url, data, config);
    return res.data;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error?.message);
  }
};
export const deleteData = async (url: string, config?: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse = await instance.delete(url, config);
    return res.data;
  } catch (err: unknown) {
    const error = err as AxiosError;
    throw new Error(error?.message);
  }
};
