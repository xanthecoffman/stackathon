import db from '../../firestore'

const classCollection = db.collection('classes')

/**
 * ACTION TYPES
 */
const GET_CLASS = 'GET_CLASS'
const GOT_ALL_CLASSES = 'GOT_ALL_CLASSES'
/**
 * INITIAL STATE
 */
const intialState = []

/**
 * ACTION CREATORS
 */
const getClass = singleClass => ({type: GET_CLASS, singleClass})
const gotAllClasses = classes => ({type: GOT_ALL_CLASSES, classes})

/**
 * THUNK CREATORS
 */
export const fetchClass = singleClassId => async dispatch => {
  try {
    const res = await classCollection.where('id', '==', singleClassId).get()
    dispatch(getClass(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchAllClasses = () => async dispatch => {
  try {
    const res = await classCollection.get()
    dispatch(gotAllClasses(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_CLASS:
      return action.singleClass
    case GOT_ALL_CLASSES:
      return action.classes
    default:
      return state
  }
}
