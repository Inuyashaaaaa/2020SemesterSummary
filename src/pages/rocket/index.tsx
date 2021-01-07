import React, { memo, useEffect, useRef, useState } from "react";
import ReactInterval from "react-interval";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect, ConnectedProps } from "react-redux";
import { ClsPrefixEnums } from "../../constants/cls-prefix";
import { setClsPrefixHOC } from "../../utils/setClsPrefixHOC";
import { formatNumber, addZero } from "../../utils";
import { Speed, Status, Text, ImageSpeed } from "./constans";
import "./index.less";
import { actionCreators } from "../../store";

const setClsPrefix = setClsPrefixHOC(ClsPrefixEnums.Rocket);

interface IRocketProps extends PropsFromRedux {
  setMusic: any;
  playMusic: any;
  resetMusic: any;
}

const Rocket = memo<IRocketProps>((props) => {
  const {
    order,
    order_per,
    xh,
    getGrade,
    setMusic,
    playMusic,
    resetMusic,
  } = props;
  const [speed, setSpeed] = useState(0);
  const [meter, setMeter] = useState(0);
  const [image, setImage] = useState("");
  const [value, setValue] = useState(15000);
  const [status, setStatus] = useState(Status.Ready);
  const [loading, setLoading] = useState(false);
  const [orangeFall, setOrangeFall] = useState(false);
  const [earthFall, setEarthFall] = useState(false);
  const [greenFall, setGreenFall] = useState(false);
  const [redFall, setRedFall] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const time = useRef(Date.now());

  useEffect(() => {
    for (let i = 0; i < ImageSpeed.length; i++)
      if (speed <= ImageSpeed[i].speed) {
        setImage(ImageSpeed[i].image);
        break;
      }
    if (speed > 50) {
      setOrangeFall(true);
    }
    if (speed > 40) {
      setEarthFall(true);
    }
    if (speed > 30) {
      setRedFall(true);
    }
    if (speed > 20) {
      setGreenFall(true);
    }
    setOpacity(speed / 30);
  }, [speed]);
  useEffect(() => {
    const sendGrade = async () => {
      setLoading(true);
      await getGrade(xh, meter);
      setLoading(false);
    };
    if (value === 0) {
      setStatus(Status.Over);
      resetMusic();
      setMusic(2);
      playMusic(2);
      sendGrade();
    }
  }, [getGrade, meter, playMusic, resetMusic, setMusic, value, xh]);

  const handleTouch = () => {
    if (status !== Status.Gaming) return;
    const now = Date.now();
    const random = Math.random() - 0.5;
    const diff = now - time.current;
    for (let i = 0; i < Speed.length; i++)
      if (diff < Speed[i].diff) {
        const speed = Speed[i].speed + random;
        setSpeed(speed);
        setMeter(speed + meter);
        break;
      }
    time.current = Date.now();
  };
  const handleStartClick = () => {
    setStatus(Status.Gaming);
    resetMusic();
    setMusic(3);
    playMusic(3);
  };
  const handleAgainClick = () => {
    setMeter(0);
    setValue(15000);
    setSpeed(0);
    setRedFall(false);
    setEarthFall(false);
    setGreenFall(false);
    setOrangeFall(false);
    setStatus(Status.Ready);
  };
  const handleTimeInterval = () => {
    const newValue = value - 16;
    setValue(newValue >= 0 ? newValue : 0);
  };
  const handleSpeedInterval = () => {
    const newSpeed = speed - 1;
    setSpeed(newSpeed >= 0 ? newSpeed : 0);
  };
  const renderResult = () => {
    if (order_per >= 0.9) {
      return Text.HIGHEST;
    } else if (order_per >= 0.8) {
      return Text.ABOVENORMAL;
    } else if (order_per >= 0.7) {
      return Text.NORMAL;
    } else if (order_per >= 0.3) {
      return Text.BELOWNORMAL;
    } else if (order_per >= 0) {
      return Text.LEAST;
    } else {
      return "????";
    }
  };
  return (
    <div className={setClsPrefix()} onTouchStart={handleTouch}>
      {status !== Status.Over && (
        <>
          <ReactInterval
            timeout={16}
            enabled={Status.Gaming === status}
            callback={handleTimeInterval}
          />
          <ReactInterval
            timeout={50}
            enabled={Status.Gaming === status}
            callback={handleSpeedInterval}
          />
          <div className={setClsPrefix("clock")}>
            {formatNumber(addZero(value, 4))}
          </div>
          <div className="star_group_1"></div>
          <div className="star_group_2"></div>
          <div className="star_group_3"></div>
          <div>
            <TransitionGroup>
              <CSSTransition key={image} timeout={2000} classNames="item">
                <div
                  className={setClsPrefix("neon")}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div
            className={setClsPrefix("starlight")}
            style={{
              top: "-200vw",
              opacity,
            }}
          ></div>
          <div
            className={setClsPrefix("starlight")}
            style={{
              opacity,
            }}
          ></div>
          <div
            className={setClsPrefix("orange")}
            style={{
              animation: orangeFall ? "3s fall-down linear forwards" : "",
            }}
          ></div>
          <div
            className={setClsPrefix("earth")}
            style={{
              animation: earthFall ? "4s fall-down linear forwards" : "",
            }}
          ></div>
          <div
            className={setClsPrefix("red")}
            style={{
              animation: redFall ? "5s fall-down linear forwards" : "",
            }}
          ></div>
          <div
            className={setClsPrefix("green")}
            style={{
              animation: greenFall ? "6s fall-down linear forwards" : "",
            }}
          ></div>
          <div className={setClsPrefix("rocket")}></div>
          <div
            className={setClsPrefix("fire")}
            style={{
              opacity,
            }}
          ></div>
          <div className={setClsPrefix("text")}>{Math.ceil(meter)}m</div>
          {Status.Ready === status && (
            <div className={setClsPrefix("start")} onClick={handleStartClick}>
              开 始
            </div>
          )}
        </>
      )}
      {status === Status.Over && (
        <>
          {loading && (
            <div className={setClsPrefix("loading-container")}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                className={setClsPrefix("loading")}
              >
                <path d="M1023.849566 529.032144C1022.533495 457.744999 1007.544916 386.64064 979.907438 321.641387 952.343075 256.605575 912.349158 197.674868 863.252422 148.980264 814.192243 100.249102 755.992686 61.717486 693.004095 36.310016 630.052062 10.792874 562.347552-1.380777 495.483865 0.081523 428.620178 1.470709 362.012394 16.495846 301.144139 44.206439 240.202769 71.807359 185.000928 111.874391 139.377154 161.044242 93.753381 210.177537 57.707676 268.450209 33.945294 331.475357 10.073239 394.463948-1.296147 462.1319 0.166154 529.032144 1.482224 595.968946 15.593423 662.503615 41.549256 723.371871 67.468531 784.240126 105.013094 839.405409 151.075558 884.956067 197.101464 930.579841 251.645269 966.552431 310.612534 990.241698 369.543241 1014.040637 432.860849 1025.336908 495.483865 1023.874608 558.143438 1022.485422 620.291206 1008.337666 677.174693 982.381833 734.094737 956.462558 785.677384 918.954552 828.230327 872.892089 870.819826 826.902741 904.416179 772.395492 926.533473 713.5379 939.986637 677.85777 949.089457 640.605667 953.915048 602.841758 955.194561 602.951431 956.510631 602.987988 957.790144 602.987988 994.27454 602.987988 1023.849566 572.425909 1023.849566 534.735116 1023.849566 532.834125 1023.739893 530.933135 1023.593663 529.032144L1023.849566 529.032144 1023.849566 529.032144ZM918.892953 710.284282C894.691881 767.021538 859.596671 818.421398 816.568481 860.82811 773.540291 903.307938 722.652236 936.75806 667.706298 958.729124 612.760359 980.773303 553.902767 991.192193 495.483865 989.729893 437.064963 988.377265 379.304096 975.106889 326.441936 950.832702 273.543218 926.668187 225.616322 891.682649 186.097653 848.764132 146.542426 805.91873 115.35887 755.176905 94.959779 700.486869 74.451015 645.796833 64.799833 587.195144 66.189018 529.032144 67.541646 470.869145 79.934642 413.437296 102.563741 360.867595 125.119725 308.297895 157.765582 260.663459 197.759499 221.364135 237.716858 182.064811 284.985719 151.137157 335.910331 130.884296 386.834944 110.55832 441.305634 101.01681 495.483865 102.47911 549.662096 103.868296 603.036061 116.261292 651.876895 138.780718 700.754287 161.22703 745.025432 193.690099 781.509828 233.428113 818.067339 273.166127 846.764984 320.142529 865.518987 370.665008 884.346105 421.224045 893.156465 475.256046 891.76728 529.032144L891.986625 529.032144C891.840395 530.933135 891.76728 532.797568 891.76728 534.735116 891.76728 569.939999 917.540325 598.893547 950.66143 602.585856 944.227308 639.728286 933.589072 675.956779 918.892953 710.284282Z"></path>
              </svg>
            </div>
          )}
          {!loading && (
            <div style={{ position: "relative", height: "100vh" }}>
              <div className={setClsPrefix("avatar")}></div>
              <div className={setClsPrefix("result")}>{Math.ceil(meter)}M</div>
              <div className={setClsPrefix("result_text")}>
                <span>
                  你是第
                  <span className={setClsPrefix("stress_text")}>{order}</span>
                  个体验游戏的
                </span>
                <br />
                <span>
                  你的飞行高度超过了
                  <span className={setClsPrefix("stress_text")}>
                    {(order_per * 100).toFixed(2)}%
                  </span>
                  的选手！
                </span>
                <br />
                <span>{renderResult()}</span>
              </div>
              <div className={setClsPrefix("again")} onClick={handleAgainClick}>
                再 来 亿 次
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
});

const mapStateToProps = (state: any) => ({
  order: state.get("order"),
  order_per: state.get("order_per"),
  xh: state.get("xh"),
});

const mapDispatchToProps = (dispatch: any) => ({
  async getGrade(xh: number, score: number) {
    await dispatch(actionCreators.sendGrade(xh, score));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Rocket);
