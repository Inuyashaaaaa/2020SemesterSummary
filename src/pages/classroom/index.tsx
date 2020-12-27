import React, { FC } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import './index.css'

interface ICountProps extends PropsFromRedux { }

const Classroom: FC<ICountProps> = (props) => {
  return (
    <div className="classroom_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="classroom_flamingo"></div>
      <div className="classroom_flower"></div>
      <div className="classroom_text">
        <span>查询了<span className="stress_text">13</span>次空教室</span>
        <br />
        <span>你似乎钟情于<span className="stress_text">3-4</span><span className="yellow_text">节</span> 去教室学习耶</span>
        <br />
        <br />
        <span>是早上起不来还是午饭前更适合读书?</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Classroom)