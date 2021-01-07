import { fromJS } from "immutable";
import { IData } from "./actions";
import { CHANGE_DATA, CHANGE_GRADE, CHANGE_PAGE } from "./types";

const defaultState = fromJS({
  page: 0, // 0 表示封面 1表示滑动屏 2表示游戏
  kc: 0, // 课程数
  ks: 0, // 课时数
  ksbfb: 0, // 课时百分比
  cjcx: 0, // 成绩查询
  kccx: 0, // 考场查询
  kjscx: 0, // 空教室查询次数
  kjssjd: 0, // 空教室时间段
  zy: 0, // 作业
  bwl: 0, // 备忘录
  lnj: 0, // 历年卷
  ylz: 0, // 引力值
  ylzbfb: 0, // 引力值百分比
  xxs: 0,
  fdzs: 0, // 福大助手
  zwsj: 0, // 最晚时间，时间戳
  xh: 0, // 学号
  lnjs: [],
  order: 0,
  order_per: 0,
});

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return state.set("page", action.page);
    case CHANGE_DATA:
      const { lnjs, ...rest } = action.data as IData;
      return state.merge({
        ...rest,
        lnjs: fromJS(lnjs),
      });
    case CHANGE_GRADE:
      return state.merge(action.data);
    default:
      return state;
  }
};

export default reducer;
