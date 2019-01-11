// https://medium.com/@avremelk/practical-redux-course-1aeb74bd01aa

export const createReducer = (initialState, fnMap) => {
    return (state = initialState, {type, payload}) => {
        const handler = fnMap[type]

        return handler ? handler(state, payload) : state
    }
}