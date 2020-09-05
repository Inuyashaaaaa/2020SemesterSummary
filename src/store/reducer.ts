import { fromJS } from 'immutable' 
import { } from './types'

const defaultState = fromJS({
  page: 0 // 0 表示封面 1表示滑动屏 2表示游戏
})


const reducer = (state = defaultState, action: any) => {

  return state
}


export default reducer

