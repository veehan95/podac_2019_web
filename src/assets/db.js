import db from '../db'

const feedbacks_ref = db.ref("feedbacks")
const rating_details_ref = db.ref("rating_details")
const agent_ref = db.ref("agent")
const user_ref = db.ref("user")

const get_rating = async (location) =>{
  return new Promise(res => {
    rating_details_ref
      .child(location.replace(/\s/, '_'))
      .once("value")
      .then(snapshot => res(snapshot.val()))
  })
}

const get_agent = async (id) =>{
  return new Promise(res => {
    agent_ref
      .child(id)
      .once("value")
      .then(snapshot => res(snapshot.val()))
  })
}

const get_user = async (id) =>{
  return new Promise(res => {
    user_ref
      .child(id)
      .once("value")
      .then(snapshot => res(snapshot.val()))
  })
}

const get_feedbacks = async (location) =>{
  return new Promise(res => {
    feedbacks_ref
      .child(location.replace(/\s/, '_'))
      .once("value")
      .then(snapshot => res(snapshot.val()))
  })
}

const get_rating_list = async () =>{
  return new Promise(res => {
    rating_details_ref
      .once("value")
      .then(snapshot => res(snapshot.val()))
  })
}

export {
  get_rating,
  get_agent,
  get_user,
  get_feedbacks,
  get_rating_list,
}
