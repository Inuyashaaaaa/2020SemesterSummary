import React, { FC, useRef } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { actionCreators } from '../../store/'
import './index.css'

interface ICoverProps extends PropsFromRedux {}

const Cover: FC<ICoverProps> = (props) => {
  const { unseal } = props
  const timer = useRef<NodeJS.Timeout>()
  const onSealTouchStart = () => {
    timer.current = setTimeout(() => {
      unseal()
    }, 1000)
  }
  const onSealTouchEnd = () => {
    if (timer.current)
      clearTimeout(timer.current)
  }
  return (
    <div className="cover_container">
      <button
        onTouchStart={onSealTouchStart}
        onTouchEnd={onSealTouchEnd}
      >长按的一个按钮</button>
      <div style={{color: 'red'}}>
        红色
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