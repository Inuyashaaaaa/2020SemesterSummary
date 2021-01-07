import React, { memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.HomeWork);

interface ICountProps extends PropsFromRedux {}

const HomeWork = memo<ICountProps>((props) => {
  const { zy, bwl } = props;
  return (
    <div className={setClsPrefix()}>
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div className={setClsPrefix("planet")}></div>
      <div className={setClsPrefix("spaceman")}></div>
      <div className={setClsPrefix("text")}>
        <span>
          你添加了<span className={setClsPrefix("stress_text")}>{zy}</span>
          次作业
        </span>
        <br />
        <span>今天的作业都完成了吗</span>
        <br />
        <br />
        <span>
          在这里留下了<span className={setClsPrefix("stress_text")}>{bwl}</span>
          条备忘录
        </span>
        <br />
        <span>今天又忘记了什么事情呢</span>
      </div>
    </div>
  );
});

const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => ({
  zy: state.get("zy"),
  bwl: state.get("bwl"),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HomeWork);
