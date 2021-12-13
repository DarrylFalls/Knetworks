import axios from 'axios'
import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const getCategories = async () => {
  try {
    const resp = await api.get('/categories')
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/users', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = () => {
  localStorage.clear()
}

export const login = async (credentials) => {
  try {
    const resp = await api.post('/auth/login', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    return error
  }
}

export const verify = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const getUsers = async () => {
  try {
    const resp = await api.get('/users')
    return resp.data
  } catch (error) {
    return error
  }
}

export const getQuestions = async (data) => {
  try {
    const resp = await api.post('/questions', data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const getAnswerAndComments = async (id, data) => {
  try {
    const resp = await api.get(`/answers/${id}`)
    return resp.data
  } catch (error) {
    return error
  }
}

export const postQuestion = async (data) => {
  try {
    const resp = await api.post('/questions', data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const postAnswer = async (data) => {
  try {
    const resp = await api.post('/answers', data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const postComment = async (data) => {
  try {
    const resp = await api.post('/answer_comments', data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const editQuestion = async (id, data) => {
  try {
    const resp = await api.put(`/questions/${id}`, data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const editAnswer = async (id, data) => {
  try {
    const resp = await api.put(`/answers/${id}`, data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const editComment = async (id, data) => {
  try {
    const resp = await api.put(`/answer_comments/${id}`, data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const deleteQuestion = async (id) => {
  try {
    const resp = await api.delete(`/questions/${id}`)
    return resp
  } catch (error) {
    return error
  }
}

export const deleteAnswer = async (id) => {
  try {
    const resp = await api.delete(`/answers/${id}`)
    return resp
  } catch (error) {
    return error
  }
}

export const deleteComment = async (id) => {
  try {
    const resp = await api.delete(`/answer_comments/${id}`)
    return resp
  } catch (error) {
    return error
  }
}