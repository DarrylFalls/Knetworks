import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './CategoryQuestion.css'

const CategoryQuestions = ({ categories }) => {
  const { id } = useParams()
  const [category, setCategory] = useState('')

  useEffect(() => {
    const current = categories.find(cat => cat.id == id)
    setCategory(current)
  }, [])

  return (
    <div className='main-category-question-div'>
      <div className='back-to-category-link-div'>
        <Link to='/categories' className='back-to-category-link'>back to categories</Link>
      </div>
      <div className='category-name-div'>{category?.name}</div>
      <div className='question-list-div'>
        {category.questions?.map((question) => (
          <div className='question-link-div'>
            <Link to={`/question/${question.id}`} className='question-list-link'>
              <div className='question-list-content-div'>{question.content}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryQuestions