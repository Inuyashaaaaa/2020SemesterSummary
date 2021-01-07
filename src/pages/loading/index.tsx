import React from "react";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.Loading);

const Loading = () => {
  return (
    <div className={setClsPrefix()}>
      <div className="star_group_1"></div>
      <div className="star_group_3"></div>
      <div className={setClsPrefix("planet")}></div>
      <div className={setClsPrefix("loading")}></div>
      <div className={setClsPrefix("dot")}></div>
    </div>
  );
};

export default Loading;
