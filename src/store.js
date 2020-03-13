import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'

const rrfConfig = {
  userProfile: 'users',
}

export const createStoreWithFirebase = firebase => {
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)

  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    //firestore: firestoreReducer // <- needed if using firestore
  })

  const initialState = {}
  const store = createStoreWithFirebase(rootReducer, initialState)

  return store
}
