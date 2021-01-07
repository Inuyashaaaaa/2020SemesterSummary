import { CHANGE_PAGE, CHANGE_DATA, CHANGE_GRADE } from "./types";
import axios from "axios";
import qs from "querystring";

export interface Lnj {
  name: string;
  value: number;
}

export interface IData {
  bwl: number;
  cjcx: number;
  fdzs: number;
  kc: number;
  kccx: number;
  kjssjd: number;
  ks: number;
  ksbfb: number;
  ksjcx: number;
  lnj: number;
  lnjs: Lnj[];
  ts: number;
  xh: string;
  xxs: number;
  yizbfb: number;
  ylz: number;
  zwsj: number;
  zy: number;
}

export interface IGrade {
  order: number;
  order_per: number;
}

const axiosInstance = axios.create({
  baseURL: "https://statistics.fzuhelper.w2fzu.com/",
});

export const changePage = (page: number) => ({
  type: CHANGE_PAGE,
  page,
});

export const setData = (data: IData) => ({
  type: CHANGE_DATA,
  data,
});

export const setGrade = (data: IGrade) => ({
  type: CHANGE_GRADE,
  data,
});

export const getData = () => {
  return async () => {
    const parseObj = qs.parse(window.location.search.slice(1));
    const { token } = parseObj;
    return axiosInstance.get(`/api/user/${token}`);
  };
};

// export const unseal = (student_id: number) => {
//   axiosInstance.get(`/api/AnnualReport`, {
//     params: {
//       platform: isAndroud() ? "android" : "ios",
//       student_id,
//       term: Term,
//       user_start: 1,
//     },
//   });
// };

// export const share = (student_id: number) => {
//   return async () => {
//     axiosInstance.get(`/api/AnnualReport`, {
//       params: {
//         platform: isAndroud() ? "android" : "ios",
//         student_id,
//         term: Term,
//         share: 1,
//       },
//     });
//   };
// };

// export const egg = (student_id: number) => {
//   return async () => {
//     axiosInstance.get(`/api/AnnualReport`, {
//       params: {
//         platform: isAndroud() ? "android" : "ios",
//         student_id,
//         term: Term,
//         user_egg: 1,
//       },
//     });
//   };
// };

/**
 * 发送米数，获得游玩人次和名次百分比
 * @param xh 学号
 * @param score 米数
 */
export const sendGrade = (xh: number, score: number) => {
  return async (dispatch: any) => {
    const res = await axiosInstance.get("/api/AnnualReport/game/record", {
      params: {
        student_id: xh,
        score,
      },
    });
    const data = res.data.message;
    dispatch(setGrade(data));
  };
};
