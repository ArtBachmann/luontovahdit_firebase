import { createReducer } from '../../app/common/util/reducerUtil'
import { CREATE_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY, FETCH_ACTIVITIES } from './activityConstants'

const initialState = []

export const createActivity = (state, payload) => {
  return [...state, Object.assign({}, payload.activity)]
}

export const updateActivity = (state, payload) => {
  return [
    ...state.filter(activity => activity.id !== payload.actvityId),
    Object.assign({}, payload.activity)
  ]
}

export const deleteActivity = (state, payload) => {
  return [...state.filter(activity => activity.id !== payload.actvityId)]
}

export const fetchActivities = (state, payload) => {
  return payload.activities
}

export default createReducer(initialState, {
  [CREATE_ACTIVITY]: createActivity,
  [UPDATE_ACTIVITY]: updateActivity,
  [DELETE_ACTIVITY]: deleteActivity,
  [FETCH_ACTIVITIES]: fetchActivities
})