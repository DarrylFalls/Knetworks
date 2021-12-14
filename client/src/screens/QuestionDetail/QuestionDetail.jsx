import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getQuestion } from '../../services/utils'
import Answer from '../../components/Answer/Answer'

const QuestionDetail = ({loggedIn, user, users}) => {
  const { id } = useParams()
  const [question, setQuestion] = useState('')
  const [answerToggle, setAnswerToggle] = useState(true)
  const [questionToggle, setQuestionToggle] = useState(true)

  useEffect(() => {
    const fetchQuestion = async () => {
      const getQ = await getQuestion(id)
      setQuestion(getQ)
    }
    fetchQuestion()
  }, [answerToggle, questionToggle])
  return (
    <div>
      <div>{question?.content}</div>
      <div>{question.answers?.map((answer) => (
        <div>
          <Answer answer_id={answer.id} answerToggle={answerToggle} setAnswerToggle={setAnswerToggle} users={users} user={user} user_id={answer.user_id} loggedIn={loggedIn}/>
        </div>
      ))}</div>
    </div>
  )
}

export default QuestionDetail