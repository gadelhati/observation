import { api } from "../api/axios"

export const create = data => {
  return api.post(`/observation`, data)
}

export const getRetrieve = () => {
  return api.get(`/observation/retrieve`)
}

export const getAll = () => {
  return api.get(`/observation`)
}

export const retrieve = id => {
  return api.get(`/observation/${id}`)
}

export const update = (id, data) => {
  return api.put(`/observation/${id}`, data)
}

export const remove = id => {
  return api.delete(`/observation/${id}`)
}

export const removeAll = () => {
  return api.delete(`/observation`)
}

export const findBySource = source => {
  return api.get(`/observation?source=${source}`)
}