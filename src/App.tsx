import React, { useEffect } from 'react';
import './App.css';
import Cover from './components/cover'

// 轮播图组件
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';


function App() {
  return (
    <div className="App">
      <Cover />
      <Swiper>
        <SwiperSlide>
          <div style={{background: 'red'}}>123</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{background: 'blue'}}>2324</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{background: 'green'}}>12</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
