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

export const verify = () => {

}

export const getQuestions = async (data) => {
  try {
    const resp = await api.post('/questions', data)
    return resp.data
  } catch (error) {
    return error
  }
}

export const getAnswerAndComments = async (data) => {
  try {

  } catch (error) {
    return error
  }
}

export const postQuestion = async (data) => {
  try {

  } catch (error) {
    return error
  }
}

export const postAnswer = async (data) => {
  try {

  } catch (error) {
    return error
  }
}

export const postComment = async (data) => {
  try {

  } catch (error) {
    return error
  }
}

export const editQuestion = async (id, data) => {
  try {

  } catch (error) {
    return error
  }
}

export const editAnswer = async (id, data) => {
  try {

  } catch (error) {
    return error
  }
}

export const editComment = async (id, data) => {
  try {

  } catch (error) {
    return error
  }
}

export const deleteQuestion = async (id) => {
  try {

  } catch (error) {
    return error
  }
}

export const deleteAnswer = async (id) => {
  try {

  } catch (error) {
    return error
  }
}

export const deleteComment = async (id) => {
  try {

  } catch (error) {
    return error
  }
}