/**
 * @author lero
 * @description 针对新生的, 入学多少天
 */

import React, { FC } from 'react'
import './index.css'
import { connect, ConnectedProps } from 'react-redux'

interface IDateProps extends PropsFromRedux {}

const Date: FC<IDateProps> = (props) => {
  return (
    <div className="date_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div className="planet"></div>
      <div className="dirigible"></div>
      <div className="smoke"></div>
      <div className="date_text">
        <span>这是你来到<span className="stress_text">福大</span>的</span>
        <br />
        <span>第<span className="stress_text">248</span>天</span>
        <br />
        <br />
        <span>很高兴遇到你!</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default Date