// eslint-disable-next-line import/no-unresolved
import { TRAVEL_KEY } from "@env";
import axios from "axios";

export enum TypeEnum {
  HOTELS = "hotels",
  RESTAURANTS = "restaurants",
  ATTRACTIONS = "attractions",
}

export interface BoundaryParams {
  bl_latitude: string;
  bl_longitude: string;
  tr_latitude: string;
  tr_longitude: string;
}

const baseUrl = "https://travel-advisor.p.rapidapi.com";

const TravelApi = {
  getList: async (
    type: TypeEnum,
    { bl_latitude, bl_longitude, tr_latitude, tr_longitude }: BoundaryParams,
  ) => {
    try {
      const { data } = await axios.get(`${baseUrl}/${type}/list-in-boundary`, {
        params: {
          bl_latitude: bl_latitude ? bl_latitude : "25.15543993776612",
          tr_latitude: tr_latitude ? tr_latitude : "25.41257834546226",
          bl_longitude: bl_longitude ? bl_longitude : "51.39587210719369",
          tr_longitude: tr_longitude ? tr_longitude : "51.62812119686502",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": TRAVEL_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      });

      return data.data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
        throw new Error(err);
      }
    }
  },
};

export default TravelApi;
