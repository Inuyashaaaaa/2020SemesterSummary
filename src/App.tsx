import React, { FC, useRef, useState } from 'react';
import './App.css';
import Cover from './components/cover'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import { connect, ConnectedProps } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
import './App.css'

interface IAppProps extends PropsFromRedux { }

const App: FC<IAppProps> = (props) => {
  const { page, joinGame } = props
  const timer = useRef<NodeJS.Timeout>()
  const onJoinGame = (activeIndex: number) => {
    if (activeIndex === 2) {
      timer.current = setTimeout(() => {
        joinGame()
      }, 3000);
    } else {
      if (timer.current)
        clearTimeout(timer.current)
    }
  }
  return (
    <div className="App">
      <CSSTransition
        in={page === 0}
        classNames="cover"
        timeout={3000}
      >
        <Cover />
      </CSSTransition>
      <CSSTransition
        in={page === 1}
        classNames="cover"
        timeout={3000}
      >
        <Swiper
          onSlideChange={(swiper) => onJoinGame(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div style={{ background: 'red' }}>轮播图</div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: 'blue' }}>2324</div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: 'green' }}>12</div>
          </SwiperSlide>
        </Swiper>
      </CSSTransition>
      <CSSTransition
        in={page === 2}
        classNames="cover"
        timeout={3000}
      >
        <div>游戏界面</div>
      </CSSTransition>
    </div>
  );
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
