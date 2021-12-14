import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { postQuestion } from '../../services/utils'

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
      navigate(`/categories${category_id}`)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>Pick a category.</lable>
          <select name='category_id' value={category_id} onChange={handleChange}>
            <option value=''>Category...</option>
            <option value='1'>Science</option>
            <option value='2'>Philosophy</option>
            <option value='3'>History</option>
          </select>
        <br/>
        <label>What is your question?</label>
        <input type='textarea' name='content' value={content} onChange={handleChange} />
        <br />
        <input type='submit' />
      </form>
    </div>
  )
}

export default CreateQuestion