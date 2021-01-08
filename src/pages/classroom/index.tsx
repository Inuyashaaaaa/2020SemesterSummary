import React, { FC } from "react";
import { ConnectedProps, connect } from "react-redux";
import "./index.css";
import { Text } from "./constants";

interface ICountProps extends PropsFromRedux {}

const Classroom: FC<ICountProps> = (props) => {
  const { kjscx, kjssjd } = props;
  const getText = () => {
    switch (kjssjd) {
      case 1:
        return "1-2";
      case 3:
        return "3-4";
      case 5:
        return "5-6";
      case 7:
        return "7-8";
      case 9:
        return "9-11";
      default:
        return "1-2";
    }
  };
  return (
    <div className="classroom_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="classroom_flamingo"></div>
      <div className="classroom_flower"></div>
      <div className="classroom_text">
        <span>
          查询了<span className="stress_text">{kjscx}</span>次空教室
        </span>
        <br />
        {kjscx !== 0 && (
          <>
            <span>
              你似乎钟情于<span className="stress_text">{getText()}</span>
              <span className="yellow_text">节</span> 去教室学习耶
            </span>
            <br />
            <br />
            <span>{Text[getText()]}</span>
          </>
        )}
        {kjscx === 0 && (
          <>
            <span>是有什么其他适合学习的小天地吗</span>
            <br />
            <br />  
            <span>{Text["1-2"]}</span>
          </>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => ({
  kjscx: state.get("kjscx"),
  kjssjd: state.get("kjssjd"),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Classroom);
