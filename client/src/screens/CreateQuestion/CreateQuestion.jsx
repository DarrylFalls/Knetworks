import {useState} from 'react'

const CreateQuestion = () => {
  return (
    <div>
      <form>
        <lable>Pick a category.
          <select>
            <option value=''>Category</option>
            <option value='1'>Science</option>
            <option value='2'>Philosophy</option>
            <option value='3'>History</option>
          </select>
        </lable>
        <br/>
        <label>What is your question?</label>
        <input type='textarea' name='question' />
        <br />
        <input type='submit' />
      </form>
    </div>
  )
}

export default CreateQuestion