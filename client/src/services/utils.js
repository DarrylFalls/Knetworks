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

export const signOut = async () => {

}

export const login = async (credentials) => {

}

export const getQuestions = async (data) => {

}

export const getAnswerAndComments = async (data) => {

}

export const postQuestion = async (data) => {

}

export const postAnswer = async (data) => {

}

export const postComment = async (data) => {

}

export const editQuestion = async (id, data) => {

}

export const editAnswer = async (id, data) => {

}

export const editComment = async (id, data) => {

}

export const deleteQuestion = async (id) => {

}

export const deleteAnswer = async (id) => {

}

export const deleteComment = async (id) => {

}