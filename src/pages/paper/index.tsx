import React, { memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import WordCloud from "../../components/wordCloud";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import maskImage from "./images/mask-img.png";
import qs from "querystring";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.Paper);

interface IPaperProps extends PropsFromRedux {}

const Paper = memo<IPaperProps>((props) => {
  const { lnjs, lnj } = props;
  const parseObj = qs.parse(window.location.search.slice(1));
  const { courses: cs } = parseObj;
  const decodeCs = decodeURIComponent(cs as string);
  const courses = (decodeCs as string).split(";;;");
  const data = courses.map((value) => ({
    name: value,
    value: Math.random() * 10,
  }));
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
          你将<span className={setClsPrefix("stress_text")}>{lnj}</span>
          份历年卷收入囊中
        </span>
      </div>
      <WordCloud
        maskImage={maskImage}
        data={lnjs.toJS().length === 0 ? data : lnjs.toJS()}
      />
    </div>
  );
});
const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => ({
  lnj: state.get("lnj"),
  lnjs: state.get("lnjs"),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Paper);
