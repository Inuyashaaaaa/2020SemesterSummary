import React, { useRef, useState, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { actionCreators } from "../../store";
import { ClsPrefixEnums } from "../../constants";
import { setClsPrefixHOC } from "../../utils";
import classNames from "classnames";
import "./index.less";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.Cover);

interface ICoverProps extends PropsFromRedux {
  setMusic: any,
  resetMusic: any,
  playMusic: any,
}

const Cover = memo<ICoverProps>((props) => {
  const { unseal, setMusic, resetMusic, playMusic } = props;
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timeout>();

  const onSealTouchStart = () => {
    setIsAnimation(true);
    timer.current = setTimeout(() => {
      // if (window.navigator.vibrate) window.navigator.vibrate(100);
      // android 的抖动
      unseal();
      resetMusic();
      setMusic(1);
      playMusic(1);
    }, 500);
  };
  const onSealTouchEnd = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsAnimation(false);
  };
  const sealBarTextClassName = classNames(setClsPrefix("seal_bar_text"), {
    [setClsPrefix("seal_bar_animation")]: isAnimation,
  });
  const leftArrowGroupClassName = classNames(setClsPrefix("left_arrow_group"), {
    [setClsPrefix("left_arrow_group_animation")]: isAnimation,
  });
  const rightArrowGroupClassName = classNames(
    setClsPrefix("right_arrow_group"),
    {
      [setClsPrefix("right_arrow_group_animation")]: isAnimation,
    }
  );

  return (
    <div className={setClsPrefix()}>
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div>
        <div className={setClsPrefix("star")}></div>
        <div className={setClsPrefix("star")}></div>
        <div className={setClsPrefix("star")}></div>
      </div>
      <div className={setClsPrefix("space_man")}></div>
      <div className={setClsPrefix("helmet_light")}></div>
      <div className={setClsPrefix("planet")}></div>
      <div
        className={setClsPrefix("seal_bar")}
        onTouchStart={onSealTouchStart}
        onTouchEnd={onSealTouchEnd}
      >
        <div className={sealBarTextClassName}>启封</div>
      </div>
      <div className={setClsPrefix("cover_text")}>
        收到一封
        <br />
        来自未知宇宙的来信 ...
      </div>
      <div className={setClsPrefix("statement_text")}>
        长按即代表同意福大助手使用你的数据生成学期报告
      </div>
      <div className={leftArrowGroupClassName}>《《《</div>
      <div className={rightArrowGroupClassName}>》》》</div>
    </div>
  );
});

const mapDispatchToProps = (dispatch: any) => ({
  unseal() {
    dispatch(actionCreators.changePage(1));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cover);
