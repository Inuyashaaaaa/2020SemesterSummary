import moment from "moment";
import React, { FC } from "react";
import { ConnectedProps, connect } from "react-redux";
import "./index.css";

interface ICountProps extends PropsFromRedux {}

const Count: FC<ICountProps> = (props) => {
  const { cjcx, zwsj } = props;

  return (
    <div className="count_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="count_space_man"></div>
      <div className="count_bird_left"></div>
      <div className="count_bird_center"></div>
      <div className="count_bird_right"></div>
      <div className="count_text">
        <span>这学期</span>
        <br />
        <span>
          你一共使用了<span className="stress_text">{cjcx}</span>次福大助手
        </span>
        <br />
        <span>
          <span className="yellow_text">
            {moment(new Date(zwsj)).format("M月DD号 hh:mm")}
          </span>{" "}
          你依然在福大助手
        </span>
        <br />
        <span>是忘了第二天上什么课吗?</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => ({
  cjcx: state.get("cjcx"),
  zwsj: state.get("zwsj"),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Count);
