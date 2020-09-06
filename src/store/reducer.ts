import { fromJS } from 'immutable' 
import { CHANGE_PAGE } from './types'

const defaultState = fromJS({
  page: 0 // 0 表示封面 1表示滑动屏 2表示游戏
})

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}

export default reducer
