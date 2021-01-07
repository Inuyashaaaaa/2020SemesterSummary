import React, { memo, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.Grivitation);

interface IGrivitationProps extends PropsFromRedux {}

const Grivitation = memo<IGrivitationProps>((props) => {
  const { ylz, yizbfb, xxs } = props;
  const dom = useRef<HTMLDivElement | null>(null);
  const handleShareClick = () => {
    alert('ok');
    // @ts-ignore
    jsInterface.save();
  };

  return (
    <div className={setClsPrefix()} ref={dom}>
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div className={setClsPrefix("track")}></div>
      {xxs > 0 && (
        <div className={setClsPrefix("potato1_container")}>
          <div className={setClsPrefix("potato1")}></div>
        </div>
      )}
      {xxs > 1 && (
        <div className={setClsPrefix("green1_container")}>
          <div className={setClsPrefix("green1")}></div>
        </div>
      )}
      {xxs > 2 && (
        <div className={setClsPrefix("moon_container")}>
          <div className={setClsPrefix("moon")}></div>
        </div>
      )}
      {xxs > 3 && (
        <div className={setClsPrefix("blue1_container")}>
          <div className={setClsPrefix("blue1")}></div>
        </div>
      )}
      {xxs > 4 && (
        <div className={setClsPrefix("satum_container")}>
          <div className={setClsPrefix("satum")}></div>
        </div>
      )}
      {xxs > 5 && (
        <div className={setClsPrefix("green_container")}>
          <div className={setClsPrefix("green")}></div>
        </div>
      )}
      {xxs > 6 && (
        <div className={setClsPrefix("potato_container")}>
          <div className={setClsPrefix("potato")}></div>
        </div>
      )}
      {xxs > 7 && (
        <div className={setClsPrefix("red_container")}>
          <div className={setClsPrefix("red")}></div>
        </div>
      )}
      {xxs > 8 && (
        <div className={setClsPrefix("earth_container")}>
          <div className={setClsPrefix("earth")}></div>
        </div>
      )}
      {xxs > 9 && (
        <div className={setClsPrefix("blue_container")}>
          <div className={setClsPrefix("blue")}></div>
        </div>
      )}
      <div className={setClsPrefix("black_hole")}></div>
      <div className={setClsPrefix("text")}>
        <span>这个学期</span>
        <br />
        <span>
          你的引力值是
          <span className={setClsPrefix("stress_text")}>{ylz}</span>
          ,吸引了<span className={setClsPrefix("stress_text")}>{xxs}</span>
          颗行星
        </span>
        <br />
        <span>
          超越了茫茫宇宙中
          <span className={setClsPrefix("stress_text")}>
            {(yizbfb * 100).toFixed(2)}%
          </span>
          的人
        </span>
        <br />
        <span>小星系继续养成中...</span>
      </div>
      <div className={setClsPrefix("download")} onClick={handleShareClick}></div>
      <div className={setClsPrefix("download_text")}>
        保存图片
      </div>
    </div>
  );
});

const mapStateToProps = (state: any) => ({
  ylz: state.get("ylz"),
  yizbfb: state.get("yizbfb"),
  xxs: state.get("xxs"),
});

const mapDispatchToProps = (dispatch: any) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Grivitation);
