import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";

const YOUTUBE_API_KEY = "AIzaSyD-03Bsv_29izXT-X00KEQIcI3S3p9oDNY";

export const getRequest = <T> (url: string, params?: object): Promise<AxiosResponse<T>> => {
  const queryObj = params ? params : {};
  const URL = `${BASE_URL}${url}`;
  return axios.get(URL, {
    params: {
      ...queryObj,
      key: YOUTUBE_API_KEY
    }
  })
}
