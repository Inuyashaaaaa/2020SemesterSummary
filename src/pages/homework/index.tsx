import React, { memo } from "react";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.HomeWork);

const HomeWork = memo(() => {
  return (
    <div className={setClsPrefix()}>
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div className={setClsPrefix("planet")}></div>
      <div className={setClsPrefix("spaceman")}></div>
      <div className={setClsPrefix("text")}>
        <span>
          你添加了<span className={setClsPrefix("stress_text")}>23</span>次作业
        </span>
        <br />
        <span>
          似乎<span className={setClsPrefix("stress_text")}>高等数学</span>作业
        </span>
        <br />
        <span>是最折磨你的小妖精</span>
        <br />
        <br />
        <span>
          在这里留下了<span className={setClsPrefix("stress_text")}>25</span>
          条备忘录
        </span>
        <br />
        <span>今天又忘记了什么事情呢</span>
      </div>
    </div>
  );
});

export default HomeWork;
