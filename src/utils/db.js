import firebase from 'firebase'
import firebaseConfig from '../firebase.json'

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const storage = firebase.storage()

const feedbacks_ref = db.ref('feedback')
const location_detail = db.ref('location_detail')
const agent_ref = db.ref('agent')
const user_ref = db.ref('user')
const reward_ref = db.ref('reward')
const images_ref = storage.ref("images")

const get_rating = async (location) => {
  return new Promise(res => {
    location_detail
      .child(location.replace(/\s/, '_'))
      .once('value')
      .then(snapshot => res(snapshot.val()))
  })
}

const get_agent = async (id) => {
  return new Promise(res => {
    agent_ref
      .child(id)
      .once('value')
      .then(snapshot => res(snapshot.val()))
  })
}

const get_user_id = async (id) => {
  return new Promise(res => {
    agent_ref
      .orderByChild('username')
      .equalTo(id)
      .once('value')
      .then(snapshot => res(snapshot.val()))
  })
}

const get_user = async (id) => {
  return new Promise(res => {
    user_ref
      .child(id)
      .once('value')
      .then(snapshot => res(snapshot.val()))
  })
}

const get_feedback_via_id = async (id) => {
  return new Promise(res => {
    feedbacks_ref
      .child(id)
      .once('value')
      .then(ss => res(ss.val()))
  })
}

const get_feedbacks = async (location) => {
  return new Promise(res => {
    location_detail
      .child(location.replace(/\s/, '_'))
      .child('history')
      .once('value')
      .then(snapshot => {
        const val = snapshot.val()
        const prom = Object.keys(val)
            .map(key => val[key].report)
            .flat()
            .map(item => get_feedback_via_id(item))
        res(Promise.all(prom))
      })
  })
}

const get_rating_list = async () => {
  return new Promise(res => {
    location_detail
      .once('value')
      .then(snapshot => res(snapshot.val()))
  })
}

const get_reward = async () => {
  return new Promise(res => {
    reward_ref
      .once('value')
      .then(snapshot => res(snapshot.val()))
  })
}

const get_image = async (image_name)=> {
  return new Promise(res => {
    images_ref
      .child(image_name)
      .getDownloadURL()
      .then(url => res(url))
  })
}

export {
  get_rating,
  get_agent,
  get_user,
  get_feedbacks,
  get_rating_list,
  get_image,
  get_reward,
  get_user_id,
}
