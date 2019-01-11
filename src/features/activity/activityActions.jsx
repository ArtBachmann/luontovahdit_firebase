import { toastr } from 'react-redux-toastr';
import { CREATE_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY, FETCH_ACTIVITIES } from './activityConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions'
import { fetchSampleData } from '../../app/data/mockApi'

export const fetchActivities = (activities) => {
    return {
        type: FETCH_ACTIVITIES,
        payload: activities
    }
}

export const createActivity = (activity) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_ACTIVITY,
                payload: {
                    activity
                }
            })
            toastr.success('Hyaa!!', 'Uusi havainto lisatty')
        } catch (error) {
            toastr.error('Oops', 'Jotain on vaarin')
        }
    }
}

export const updateActivity = (activity) => {
    return async dispatch => {
        try {
            dispatch({
                type: UPDATE_ACTIVITY,
                payload: {
                    activity
                }
            })
            toastr.success('Hyaa!!', 'Uusi havainto uusittu')
        } catch (error) {
            toastr.error('Oops', 'Jotain on vaarin')
        }
    }
}

export const deleteActivity = (activityId) => {
    return {
        type: DELETE_ACTIVITY,
        payload: {
            activityId
        }
    }
}

// Can be user with lifecycle methods, but we need to load when app loads.
export const loadActivities = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            let activities = await fetchSampleData();
            dispatch(fetchActivities(activities))
            dispatch(asyncActionFinish());
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError());
        }
    }
}