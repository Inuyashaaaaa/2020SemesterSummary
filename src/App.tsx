import React, { FC, useRef } from 'react'
import Cover from './pages/cover'
import Date from './pages/date'
import Avatar from './pages/avatar'
import Course from './pages/course'
import Count from './pages/count'
import './App.css'
import 'swiper/swiper.scss'
import  SwiperCore, { EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { connect, ConnectedProps } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
SwiperCore.use([EffectFade])

const music = require('./assets/music/music.mp3')

interface IAppProps extends PropsFromRedux { }

const App: FC<IAppProps> = (props) => {
  const { page, joinGame } = props
  const timer = useRef<NodeJS.Timeout>()
  const audio = useRef<HTMLAudioElement | null>(null)
  const onJoinGame = (activeIndex: number) => {
    if (activeIndex === 3) {
      timer.current = setTimeout(() => {
        joinGame()
      }, 3000);
    } else {
      if (timer.current)
        clearTimeout(timer.current)
    }
  }
  const playMusic = () => {
    if (audio.current) {
      if (audio.current.paused)
        audio.current.play()
      else
        audio.current.pause()
    }
  }
  const renderComponent = () => {
    switch (page) {
      case 0:
        return <Cover />
      case 1:
        return (
          <div>
            <Swiper
              onSlideChange={(swiper) => onJoinGame(swiper.activeIndex)}
              effect="fade"
              direction="vertical"
            >
              <SwiperSlide>
                <div style={{height: '100vh'}}>
                  <Date />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <Count />
              </SwiperSlide>
              <SwiperSlide>
                <Avatar />
              </SwiperSlide>
              <SwiperSlide>
                <Course />
              </SwiperSlide>
            </Swiper>
          </div>
        )
      case 2:
        return <div>游戏界面</div>
      default:
        break;
    }
  }
  return (
    <div className="App">
      <SwitchTransition>
        <CSSTransition
          key={page}
          classNames="cover"
          timeout={200}
        >
          {renderComponent()}
        </CSSTransition>
      </SwitchTransition>
      <div className="return_container"></div>
      <div className="music_container" onClick={() => playMusic()}></div>
      <audio ref={audio} src={music} />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  page: state.get('page')
})

const mapDispatchToProps = (dispatch: any) => ({
  joinGame() {
    dispatch(actionCreators.changePage(2))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App);
