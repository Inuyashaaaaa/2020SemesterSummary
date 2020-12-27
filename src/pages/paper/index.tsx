import React, { memo } from "react";
import WordCloud from "../../components/wordCloud";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import maskImage from "./images/mask-img.png";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.Paper);

const Paper = memo(() => {
  return (
    <div className={setClsPrefix()}>
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div className={setClsPrefix("planet")}></div>
      <div className={setClsPrefix("spaceship")}></div>
      <div className={setClsPrefix("text")}>
        <span>在这一学年里</span>
        <br />
        <span>
          你将<span className={setClsPrefix("stress_text")}>29</span>
          份历年卷收入囊中
        </span>
      </div>
      <WordCloud maskImage={maskImage} />
    </div>
  );
});

export default Paper;
