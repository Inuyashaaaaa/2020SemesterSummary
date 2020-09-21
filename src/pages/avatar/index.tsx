import React, { FC } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import './index.css'
import BubbleChart from '../../components/bubbleChart'
import avatar from './images/avatar.jpg'

interface IAvatarProps extends PropsFromRedux { }

const Avatar: FC<IAvatarProps> = (props) => {
  const width = window.innerWidth * 1
  const height = window.innerHeight * 0.3
  return (
    <div className="avatar_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="astronaut"></div>
      <div className="avatar_text">
        <span>你似乎是一个很有个性的人</span>
        <br />
        <span>你一共换了<span className="stress_text">7</span>个头像</span>
      </div>
      <div className="avatar_chart_container">
        <BubbleChart images={[avatar, avatar, avatar, avatar, avatar, avatar, avatar]} height={height} width={width} />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Avatar)