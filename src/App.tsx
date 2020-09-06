import React, { FC, useState } from 'react';
import './App.css';
import Cover from './components/cover'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
import { connect, ConnectedProps } from 'react-redux';
import { actionCreators } from './store';

interface IAppProps extends PropsFromRedux { }

const App: FC<IAppProps> = (props) => {
  const { page, joinGame } = props
  const [ timer, setTimer ] = useState<NodeJS.Timeout>()
  const onJoinGame = (activeIndex: number) => {
    if (activeIndex === 2) {
      setTimer(setTimeout(() => {
        joinGame()
      }, 3000))
    } else {
      if (timer)
        clearTimeout(timer)
    }
  }
  const renderComponent = () => {
    switch (page) {
      case 0:
        return <Cover />
      case 1:
        return (
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
        )
      case 2:
        return <div>游戏页面</div>
      default:
        alert('发生了未知错误')
        break;
    }
  }
  return (
    <div className="App">
      {renderComponent()}
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
