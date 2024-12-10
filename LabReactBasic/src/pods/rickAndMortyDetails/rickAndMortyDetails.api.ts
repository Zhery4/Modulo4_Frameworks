import axios, { AxiosResponse } from "axios";

const API_URL = process.env.RICK_AND_MORTY_API_URL;

export const getRickAndMortyCharactersDetails = async (
  id: number
): Promise<AxiosResponse> => {
  return axios.get(`${API_URL}/character/${id}`);
};
