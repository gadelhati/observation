import { constants } from "../types/constants"
import { create, retrieve, getRetrieve, update, remove, removeAll } from "../services/service.shipsynop"

export const createActions = (item) => async (dispatch) => {
    dispatch(createStart())
    try {
        const response = await create(item)
        dispatch(createSuccess(response))
        return Promise.resolve(response)
    } catch (error) {
        dispatch(createError(error))
        return Promise.reject(error)
    }
}
export const createStart = () => ({
    type: constants.CREATE_START,
})
export const createSuccess = response => ({
    type: constants.CREATE_SUCCESS,
    payload: response
})
export const createError = error => ({
    type: constants.CREATE_ERROR,
    payload: error
})

export const retrieveAllActions = () => async (dispatch) => {
    dispatch(retrieveStart())
    try {
        const response = await getRetrieve()
        dispatch(retrieveAllSuccess(response.data))
        return Promise.resolve(response.data)
    } catch (error) {
        dispatch(retrieveAllError(error))
        return Promise.reject(error)
    }
}
export const retrieveAllStart = () => ({
    type: constants.RETRIEVE_ALL_START,
})
export const retrieveAllSuccess = response => ({
    type: constants.RETRIEVE_ALL_SUCCESS,
    payload: response
})
export const retrieveAllError = error => ({
    type: constants.RETRIEVE_ALL_ERROR,
    payload: error
})

export const retrieveActions = (id) => async (dispatch) => {
    dispatch(retrieveStart())
    try {
        const response = await retrieve(id)
        dispatch(retrieveSuccess(response.data))
        return Promise.resolve(response.data)
    } catch (error) {
        dispatch(retrieveError(error))
        return Promise.reject(error)
    }
}
export const retrieveStart = () => ({
    type: constants.RETRIEVE_START,
})
export const retrieveSuccess = response => ({
    type: constants.RETRIEVE_SUCCESS,
    payload: response
})
export const retrieveError = error => ({
    type: constants.RETRIEVE_ERROR,
    payload: error
})

export const updateAction = (id, data) => async (dispatch) => {
    dispatch(updateStart())
    try {
        const response = await update(id, data)
        dispatch(updateSuccess(response))
        return Promise.resolve(response)
    } catch (error) {
        dispatch(updateError(error))
        return Promise.reject(error)
    }
}
export const updateStart = () => ({
    type: constants.UPDATE_START,
})
export const updateSuccess = response => ({
    type: constants.UPDATE_SUCCESS,
    payload: response
})
export const updateError = () => ({
    type: constants.UPDATE_ERROR
})

export const deleteAction = (id) => async (dispatch) => {
    dispatch(deleteStart())
    try {
        const response = await remove(id)
        // dispatch(deleteSuccess(response))
        return Promise.resolve(response)
    } catch (error) {
        dispatch(deleteError(error))
        return Promise.reject(error)
    }
}
export const deleteStart = () => ({
    type: constants.DELETE_START,
})
export const deleteSuccess = response => ({
    type: constants.DELETE_SUCCESS,
    payload: response
})
export const deleteError = error => ({
    type: constants.DELETE_ERROR,
    payload: error
})

export const deleteAllAction = () => async (dispatch) => {
    dispatch(deleteAllStart())
    try {
        const response = await removeAll()
        dispatch(deleteAllSuccess(response.data))
        return Promise.resolve(response)
    } catch (error) {
        dispatch(deleteError(error))
        return Promise.reject(error)
    }
}
export const deleteAllStart = () => ({
    type: constants.DELETE_ALL_START,
})
export const deleteAllSuccess = response => ({
    type: constants.DELETE_ALL_SUCCESS,
    payload: response
})
export const deleteAllError = error => ({
    type: constants.DELETE_ALL_ERROR,
    payload: error
})


// export const updatedAction = (item) => {
//     return (dispatch) => {
//         dispatch(updatedStart())
//         service.update(item.id, item)
//             .then(response => {
//                 console.log("edição ok")
//                 dispatch(updatedSuccess(response.data))
//             })
//             .catch(error => {
//                 console.log("erro ao editar")
//                 dispatch(updatedError())
//             })
//     }
// }
// export const updatedStart = () => ({
//     type: constants.UPDATED_START
// })
// export const updatedSuccess = item => ({
//     type: constants.UPDATED_SUCCESS,
//     payload: item
// })
// export const updatedError = () => ({
//     type: constants.UPDATED_ERROR
// })


// export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.findByTitle(title)
//       dispatch({
//         type: RETRIEVE_TUTORIALS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err)
//     }
//   }