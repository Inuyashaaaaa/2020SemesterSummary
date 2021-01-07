/**
 * @author lero
 * @description 成绩查询
 */

import React, { FC } from 'react'
import './index.css'
import { connect, ConnectedProps } from 'react-redux'

interface IGradeProps extends PropsFromRedux { }

const Grade: FC<IGradeProps> = () => {
  return (
    <div className="grade_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div className="grade_planet"></div>
      <div className="grade_ani_group">
        <div className="grade_astronaut"></div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Grade)