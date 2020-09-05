import { CHANGE_PAGE } from './types'

export const changePage = (page: number) => ({
  type: CHANGE_PAGE,
  page
})