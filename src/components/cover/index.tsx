import React, { FC, useRef, useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { actionCreators } from '../../store/'
import classNames from 'classnames'
import './index.css'

interface ICoverProps extends PropsFromRedux { }

const Cover: FC<ICoverProps> = (props) => {
  const { unseal } = props
  const [ isAnimation, setIsAnimation ] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timeout>()
  
  const onSealTouchStart = () => {
    setIsAnimation(true)
    timer.current = setTimeout(() => {
      unseal()
    }, 500)
  }
  const onSealTouchEnd = () => {
    if (timer.current)
      clearTimeout(timer.current)
    setIsAnimation(false)
  }
  const sealBarTextClassName = classNames('seal_bar_text', {
    seal_bar_animation: isAnimation
  })
  const leftArrowGroupClassName = classNames('left_arrow_group', {
    left_arrow_group_animation: isAnimation
  })
  const rightArrowGroupClassName = classNames('right_arrow_group', {
    right_arrow_group_animation: isAnimation
  })
  return (
    <div className="cover_container">
      <div className="star_group_1"></div>
      <div className="star_group_2"></div>
      <div className="star_group_3"></div>
      <div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="space_man"></div>
      <div className="helmet_light"></div>
      <div className="planet"></div>
      <div
        className="seal_bar"
        onTouchStart={onSealTouchStart}
        onTouchEnd={onSealTouchEnd}
      >
        <div className={sealBarTextClassName}>启封</div>
      </div>
      <div className="cover_text">
        收到一封
        <br />
        来自未知宇宙的来信 ...
      </div>
      <div className="statement_text">
        点击即代表同意福大助手使用你的数据生成学期报告
      </div>
      <div className={leftArrowGroupClassName}>
        《《《
      </div>
      <div className={rightArrowGroupClassName}>
        》》》
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  unseal() {
    dispatch(actionCreators.changePage(1))
  }
})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Cover)