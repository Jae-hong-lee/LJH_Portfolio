// 전역변수 들어갈 곳입니다. = useRecoil
import { v1 } from "uuid";
import { atom } from "recoil";

export const projectNamesState = atom({
  key: `projectNamesState/${v1()}`,
  default: [],
});
