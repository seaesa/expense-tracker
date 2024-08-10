import axios, { AxiosError, AxiosResponse } from 'axios'
const apiv1 = axios.create({
  baseURL: `${import.meta.env.NO_BASE_URL}/v1`
})
apiv1.interceptors.response.use((response: AxiosResponse<any, any>) => {
  return response.data
}, (error: AxiosError) => {
  return {
    code: error.code,
    status: error.response?.status,
    message: error.message
  }
})
export { apiv1 }