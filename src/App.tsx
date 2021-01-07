import React, { FC, useEffect, useRef, useState } from "react";
import Cover from "./pages/cover";
import Date from "./pages/date";
import Course from "./pages/course";
import Count from "./pages/count";
import Classroom from "./pages/classroom";
import Paper from "./pages/paper";
import HomeWork from "./pages/homework";
import Grivitation from "./pages/gravitation";
import Rocket from "./pages/rocket";
import "./App.css";
import "swiper/swiper.scss";
import SwiperCore, { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect, ConnectedProps } from "react-redux";
import { actionCreators } from "./store";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { IData } from "./store/actions";
import axios from "axios";
import { isAndroud } from "./utils";
import { Term } from "./constants";
SwiperCore.use([EffectFade]);

const music_main = require("./assets/music/music-main.mp3");
const music_hole = require("./assets/music/music-hole.mp3");
const music_game = require("./assets/music/music-game.mp3");

interface IAppProps extends PropsFromRedux {
  data: IData;
}

const App: FC<IAppProps> = (props) => {
  const { page, data, joinGame, setData, xh } = props;
  useEffect(() => {
    setData(data);
  }, [data, setData]);
  const timer = useRef<NodeJS.Timeout>();
  const timer2 = useRef<NodeJS.Timeout>();
  const audio1 = useRef<HTMLAudioElement | null>(null);
  const audio2 = useRef<HTMLAudioElement | null>(null);
  const audio3 = useRef<HTMLAudioElement | null>(null);
  const [music, setMusic] = useState(1);
  const onJoinGame = (activeIndex: number) => {
    if (activeIndex === 6) {
      timer.current = setTimeout(() => {
        joinGame();
      }, 30000);
      timer2.current = setTimeout(() => {
        resetMusic();
        setMusic(2);
        playMusic(2);
        axios.get(`https://statistics.fzuhelper.w2fzu.com/api/AnnualReport`, {
          params: {
            platform: isAndroud() ? "android" : "ios",
            student_id: xh,
            term: Term,
            user_egg: 1,
          },
        });
      }, 27000);
    } else {
      if (timer.current) clearTimeout(timer.current);
    }
  };
  const resetMusic = () => {
    if (audio1.current) {
      audio1.current.pause();
    }
    if (audio2.current) {
      audio2.current.pause();
    }
    if (audio3.current) {
      audio3.current.pause();
    }
  };
  const playMusic = (music: number) => {
    switch (music) {
      case 1:
        if (!audio1.current) return;
        if (audio1.current.paused) {
          audio1.current.play();
        } else {
          audio1.current.pause();
        }
        break;
      case 2:
        if (!audio2.current) return;
        if (audio2.current.paused) {
          audio2.current.play();
        } else {
          audio2.current.pause();
        }
        break;
      case 3:
        if (!audio3.current) return;
        if (audio3.current.paused) {
          audio3.current.play();
        } else {
          audio3.current.pause();
        }
        break;
      default:
        break;
    }
  };
  const renderComponent = () => {
    switch (page) {
      case 0:
        return (
          <Cover
            setMusic={setMusic}
            playMusic={playMusic}
            resetMusic={resetMusic}
          />
        );
      case 1:
        return (
          <Swiper
            onSlideChange={(swiper) => onJoinGame(swiper.activeIndex)}
            freeMode={false}
            effect="fade"
            direction="vertical"
            style={{ height: "100vh" }}
            fadeEffect={{
              crossFade: true,
            }}
          >
            <SwiperSlide>
              <Date />
            </SwiperSlide>
            <SwiperSlide>
              <Course />
            </SwiperSlide>
            <SwiperSlide>
              <Count />
            </SwiperSlide>
            <SwiperSlide>
              <Classroom />
            </SwiperSlide>
            <SwiperSlide>
              <HomeWork />
            </SwiperSlide>
            <SwiperSlide>
              <Paper />
            </SwiperSlide>
            <SwiperSlide>
              <Grivitation />
            </SwiperSlide>
          </Swiper>
        );
      case 2:
        return (
          <Rocket
            setMusic={setMusic}
            playMusic={playMusic}
            resetMusic={resetMusic}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <SwitchTransition>
        <CSSTransition key={page} classNames="cover" timeout={500}>
          {renderComponent()}
        </CSSTransition>
      </SwitchTransition>
      <div
        className="return_container"
        // @ts-ignore
        onClick={() => jsInterface.exit()}
      ></div>
      <div className="music_container" onClick={() => playMusic(music)}></div>
      <audio ref={audio1} src={music_main} loop />
      <audio ref={audio2} src={music_hole} loop />
      <audio ref={audio3} src={music_game} loop />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  page: state.get("page"),
  xh: state.get("xh"),
});

const mapDispatchToProps = (dispatch: any) => ({
  joinGame() {
    dispatch(actionCreators.changePage(2));
  },
  setData(data: IData) {
    dispatch(actionCreators.setData(data));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
