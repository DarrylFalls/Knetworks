import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getQuestion } from '../../services/utils'

const QuestionDetail = ({}) => {
  const { id } = useParams()
  const [question, setQuestion] = useState('')
  const [answerToggle, setAnswerToggle] = useState(true)

  useEffect(() => {
    const fetchQuestion = async () => {
      const getQ = await getQuestion(id)
      setQuestion(getQ)
    }
    fetchQuestion()
  })
  return (
    <div>
      <div>{question?.content}</div>
      <div>{question.answers?.map((answer) => (
        <div>
          <Answer id={answer.id}/>
        </div>
      ))}</div>
    </div>
  )
}

export default QuestionDetail