import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import firebase from '../config/firebase'

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
}

export const configureStore = (preloadedState) => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const storeEnhancers = [middlewareEnhancer]

    const composedEnhancer = compose(
        ...storeEnhancers,
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase)
    )

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )


    // Code for hot module reloading when state in store changes.
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/rootReducer', () => {
                const newRootReducer = require('../reducers/rootReducer').default
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store
}