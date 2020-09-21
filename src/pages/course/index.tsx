/**
 * @author lero
 * @description 课程数/课时数
 */

import React, { FC } from 'react'
import './index.css'
import { connect, ConnectedProps } from 'react-redux'

interface ICourseProps extends PropsFromRedux { }

const Course: FC<ICourseProps> = (props) => {
  return (
    <div className="course_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="map"></div>
      <svg 
        className="path_svg"
        version="1.1"
        viewBox="0 0 298 445">
        <path 
          className="path" 
          d="M126.5,490a4.49,4.49,0,0,1-3.83-2.14l-8-13a4.49,4.49,0,0,1-.54-3.43l11-45a4.47,4.47,0,0,1,4.46-3.43L227,424.91V396.59a70.68,70.68,0,0,1-15.79-21.11c-6.57-13.38-11.88-35.31.15-63.73,20.85-49.3,6.21-82,6.06-82.35a4.51,4.51,0,0,1,2.84-6.23c26.21-7.48,55.21-16.37,58.64-18.34,3.19-2.31,6.83-.6,11,1.37,9,4.22,21.29,10,33.87-8.25,6.09-8.84,8.35-16.56,6.54-22.33-2-6.34-8.36-8.88-8.42-8.91a4.48,4.48,0,0,1-2.46-6.18l40-82a4.51,4.51,0,0,1,2.5-2.26l9.27-3.37,9.21-19.33A4.45,4.45,0,0,1,383,51.26l17-6a4.51,4.51,0,0,1,4.92,1.31l6,7a4.5,4.5,0,1,1-6.84,5.86"
          transform="translate(-114 -45)" 
          fill="transparent"
          stroke="#ffaf54"
          strokeWidth="10"
          />
      </svg>
      <div className="flag_1"></div>
      <div className="flag_2"></div>
      <div className="flag_3"></div>
      <div className="course_planet"></div>
      <div className="course_text">
        <span>本学期有<span className="stress_text">13</span>门课程</span>
        <br />
        <span>课时数达到了<span className="stress_text">284</span>小时</span>
        <br />
        <span>超过了<span className="stress_text">93%</span>的福大学子</span>
        <br />
        <br />
        <span>用这个时间你可以步行绕福大<span className="stress_text">183</span>圈</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Course)