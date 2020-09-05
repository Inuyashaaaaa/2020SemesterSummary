import React, { FC, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { actionCreators } from '../../store/'

interface ICoverProps extends PropsFromRedux {}

const Cover: FC<ICoverProps> = (props) => {
  const [ timer, setTimer ] = useState<NodeJS.Timeout>()  
  const onSealTouchStart = () => {
    setTimer(setTimeout(() => {
      console.log('long touch!!')
    }, 1000))
  }
  const onSealTouchEnd = () => {
    if (timer)
    clearTimeout(timer)
  }
  return (
    <>
      <button
        onTouchStart={onSealTouchStart}
        onTouchEnd={onSealTouchEnd}
      >长按的一个按钮</button>
    </>
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