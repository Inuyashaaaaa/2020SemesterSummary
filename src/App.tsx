import React, { FC, useRef } from 'react';
import './App.css';
import Cover from './components/cover'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import { connect, ConnectedProps } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
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
  const renderComponent = () => {
    switch (page) {
      case 0:
        return <Cover />
      case 1:
        return (
          <div>
            <Swiper
              onSlideChange={(swiper) => onJoinGame(swiper.activeIndex)}
            >
              <SwiperSlide>
                <div style={{ background: 'red', height: '100vh' }}>轮播图</div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ background: 'blue', height: '100vh' }}>2324</div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ background: 'green', height: '100vh' }}>12</div>
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
      <div className="music_container"></div>
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
