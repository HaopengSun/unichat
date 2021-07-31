import firebase from './firebase-config'

const chatAuth = function(provider){
  firebase.auth().signInWithPopup(provider).then((res) => {
    return res.user
  }).catch((err) => {
    return err
  })
}

export default chatAuth