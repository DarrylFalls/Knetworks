import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getQuestion } from '../../services/utils'
import Answer from '../../components/Answer/Answer'

const QuestionDetail = ({ loggedIn, user, users }) => {
  const { id } = useParams()
  const [question, setQuestion] = useState('')
  const [answerToggle, setAnswerToggle] = useState(true)
  const [questionToggle, setQuestionToggle] = useState(true)
  const [edittingQuestion, setEdittingQuestion] = useState(false)
  const [questionContent, setQuestionContent] = useState('')
  const [category_id, setCategory_id] = useState('')
  const [answerContent, setAnswerContent] = useState('')
  const [question_id, setQuestion_id] = useState('')

  useEffect(() => {
    const fetchQuestion = async () => {
      const getQ = await getQuestion(id)
      setQuestion(getQ)
    }
    fetchQuestion()
  }, [answerToggle, questionToggle])

  useEffect(() => {

  }, [])

  const handleEditClick = () => {
    setEdittingQuestion(true)
  }
  return (
    <div>
      {edittingQuestion ?
        <div>
          <form>
            <input type='text' />
            <input type='submit' />
          </form>
        </div>
      : <div>{question?.content}</div>}
      {loggedIn && user?.id == question.user_id && edditingQuestion == false ? <div onClick={handleEditClick}>edit</div> : null}
      <div>{question.answers?.map((answer) => (
        <div>
          <Answer answer_id={answer.id} answerToggle={answerToggle} setAnswerToggle={setAnswerToggle} users={users} user={user} user_id={answer.user_id} loggedIn={loggedIn}/>
        </div>
      ))}</div>
    </div>
  )
}

export default QuestionDetail