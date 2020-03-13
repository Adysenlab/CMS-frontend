const firebaseConfig = {
  apiKey: "AIzaSyC2FePJoe0HFwBpIEVo2FYcoF0GdONDO_M",
  authDomain: "cms-crm-ui.firebaseapp.com",
  databaseURL: "https://cms-crm-ui.firebaseio.com",
  projectId: "cms-crm-ui",
  storageBucket: "cms-crm-ui.appspot.com",
  messagingSenderId: "145700113900",
  appId: "1:145700113900:web:e5fe7a425865944a2d84c9",
  measurementId: "G-6XWLXVX25P"
};

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(firebaseConfig)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
