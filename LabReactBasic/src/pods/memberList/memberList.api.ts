import axios, { AxiosResponse } from "axios";
import { IMemberApiModel } from "./memberList.api-model";


const API_URL = process.env.GITHUB_API_URL;

export const getMemberList = async (team: string, page: number) : Promise<AxiosResponse<IMemberApiModel[]>> => {
    console.log(API_URL);
    return axios.get<IMemberApiModel[]>(`${API_URL}/${team}/members`, {
        params:{
            page: page,
            per_page: 5
        }
    });
};
