import { useParams, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

const CategoryQuestions = ({ categories }) => {
  const { id } = useParams()
  const [category, setCategory] = useState('')

  useEffect(() => {
    const current = categories.find(cat => cat.id == id)
    setCategory(current)
  }, [])

  return (
    <div>
      <div>
        <Link to='/categories'>back to categories</Link>
      </div>
      <div>{category?.name}</div>
      {category.questions?.map((question) => (
        <div>
          <Link to={`/question/${question.id}`}>
            <div>{question.content}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CategoryQuestions