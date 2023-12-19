import { Color } from "./color";
import { TypeEnum } from "../api/travelApi";

type CategoryDataType = {
  id: number;
  name: string;
  color: Color;
  type: TypeEnum;
};

export const categories: CategoryDataType[] = [
  { id: 1, name: "hotel", color: Color.Primary, type: TypeEnum.HOTELS },
  {
    id: 2,
    name: "restaurant",
    color: Color.Primary,
    type: TypeEnum.RESTAURANTS,
  },
  {
    id: 3,
    name: "attractions",
    color: Color.Primary,
    type: TypeEnum.ATTRACTIONS,
  },
];
