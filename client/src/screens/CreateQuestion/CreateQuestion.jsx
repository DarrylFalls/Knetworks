import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { postQuestion } from '../../services/utils'
import './CreateQuestion.css'

const CreateQuestion = ({ user, setQuestionToggle, questionToggle }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    content: '',
    user_id: '',
    category_id: '',
  })

  const { content, user_id, category_id } = formData
  
  useEffect(() => {
    const e = {target: {name: 'user_id', value: user.id}}
    handleChange(e)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newQuestion = await postQuestion(formData)
    if (newQuestion) {
      setQuestionToggle(!questionToggle)
      navigate(`/`)
    }
  }

  return (
    <div className='main-create-question-div'>
      <div className='create-question-display-div'>
        <form onSubmit={handleSubmit} className='create-question-form'>
          <label className='create-question-form-category-label'>Pick a category.</label>
            <select name='category_id' value={category_id} onChange={handleChange} className='drop-down-menu'>
              <option value=''>Category...</option>
              <option value='1'>Science</option>
              <option value='2'>Philosophy</option>
              <option value='3'>History</option>
            </select>
          <br/>
          <label className='create-question-form-question-label'>What is your question?</label>
          <textarea columns='25' name='content' value={content} onChange={handleChange} className='create-question-content-input'/>
          <br />
          <input type='submit' className='create-question-submit-button'/>
        </form>
      </div>
    </div>
  )
}

export default CreateQuestion