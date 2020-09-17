import { CHANGE_PAGE } from './types'

export const changePage = (page: number) => ({
  type: CHANGE_PAGE,
  page
})

export const getData = () => {
  return async () => {
    const timeout = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000);
      })
    }
    await timeout()
  }
}