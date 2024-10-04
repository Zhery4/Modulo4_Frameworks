import axios, { AxiosResponse } from "axios";
import { IRickAndMortyApiModel } from "./rickAndMorty.api-model";

const API_URL = process.env.RICK_AND_MORTY_API_URL;

export const getRickAndMortyCharacters = async (
  page: number
): Promise<AxiosResponse<{ results: IRickAndMortyApiModel[] }>> => {
  return axios.get<{ results: IRickAndMortyApiModel[] }>(
    `${API_URL}/character/?page=${page}`
  );
};

export const getFilteredCharacter = async (
  name: string
): Promise<AxiosResponse<{ results: IRickAndMortyApiModel[] }>> => {
  return axios.get<{ results: IRickAndMortyApiModel[] }>(
    `${API_URL}/character/?name=${name}`
  );
};
