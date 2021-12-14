import {useState, useEffect} from 'react'

const CreateQuestion = ({user}) => {
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

  return (
    <div>
      <form>
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