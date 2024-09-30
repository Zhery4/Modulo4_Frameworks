import axios, { AxiosResponse } from "axios";
import { IMemberDetailApiModel } from "./memberDetails.api-model";

const API_URL = process.env.GITHUB_API_URL;

export const getMemberDetails = async (
  id: string
): Promise<AxiosResponse<IMemberDetailApiModel>> => {
  // https://api.github.com/users/${id}
  console.log(API_URL);
  return axios.get<IMemberDetailApiModel>(`${API_URL}/users/${id}`);
};
