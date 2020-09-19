import React, { FC } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import './index.css'

interface IAvatarProps extends PropsFromRedux { }

const Avatar: FC<IAvatarProps> = (props) => {
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
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Avatar)