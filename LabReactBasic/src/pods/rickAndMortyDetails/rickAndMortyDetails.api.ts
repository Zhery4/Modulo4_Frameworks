import axios, { AxiosResponse } from "axios";
import { IRickAndMortyDetailsApiModel } from "./rickAndMortyDetails.api-model";

const API_URL = process.env.RICK_AND_MORTY_API_URL;

export const getRickAndMortyCharactersDetails = async (
  id: number
): Promise<AxiosResponse> => {
  return axios.get(`${API_URL}/character/${id}`);
};
