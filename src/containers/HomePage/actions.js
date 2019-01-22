export const GET_NEWS = 'HomePage/GET_NEWS'
export const GET_NEWS_SUCCESS = 'HomePage/GET_NEWS_SUCCESS'
export const GET_NEWS_FAIL = 'HomePage/GET_NEWS_FAIL'

export function getNews (opts) {
  return {
    type: GET_NEWS,
    opts
  }
}
