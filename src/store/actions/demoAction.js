import { ADD, MINUS } from '../../constants/demo'

export const add = () => {
  return {
    type: ADD
  }
};

export const minus = () => {
  return {
    type: MINUS
  }
};

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}

// 异步的action
export function asyncMinus () {
  return dispatch => {
    setTimeout(() => {
      dispatch(minus())
    }, 2000)
  }
}
