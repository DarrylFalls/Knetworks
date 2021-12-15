import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { deleteQuestion, editQuestion, getQuestion, postAnswer } from '../../services/utils'
import Answer from '../../components/Answer/Answer'

const QuestionDetail = ({ loggedIn, user, users }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [question, setQuestion] = useState('')
  // const [answerToggle, setAnswerToggle] = useState(true)
  const [questionToggle, setQuestionToggle] = useState(true)
  const [edittingQuestion, setEdittingQuestion] = useState(false)
  const [questionContent, setQuestionContent] = useState('')
  const [answerContent, setAnswerContent] = useState('')
  const [addingAnswer, setAddingAnswer] = useState(false)
  // const [category_id, setCategory_id] = useState('')

  useEffect(() => {
    const fetchQuestion = async () => {
      const getQ = await getQuestion(id)
      setQuestion(getQ)
    }
    fetchQuestion()
  }, [questionToggle])

  useEffect(() => {
    setQuestionContent(question?.content)
    // setCategory_id(question?.category_id)
  }, [question])

  const handleEditClick = () => {
    setEdittingQuestion(true)
  }

  const handleAnswerClick = () => {
    setAddingAnswer(true)
  }

  const handleEditQuestion = async (e) => {
    e.preventDefault()
    const data = {
      content: questionContent,
    }
    const updatedQuestion = await editQuestion(id, data)
    if (updatedQuestion) {
      setQuestionToggle(!questionToggle)
      setEdittingQuestion(false)
    }
  }

  

  const handleAddAnswer = async (e) => {
    e.preventDefault()
    const data = {
      content: answerContent,
      user_id: user.id,
      question_id: id,
    }
    const newAns = await postAnswer(data)
    if (newAns) {
      setQuestionToggle(!questionToggle)
      setAddingAnswer(false)
    }
  }

  const handleDeleteQuestion = async () => {
    const oldQuestion = await deleteQuestion(id)
    if (oldQuestion) {
      navigate(`/`)
    }
  }

  return (
    <div>
      {edittingQuestion ?
        <div>
          <form onSubmit={handleEditQuestion}>
            <input type='text' value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} />
            <input type='submit' />
          </form>
        </div>
        : <div>{question?.content}</div>}
      {edittingQuestion && <div onClick={handleDeleteQuestion} >delete</div>}
      {loggedIn && user?.id == question.user_id && edittingQuestion == false ? <div onClick={handleEditClick}>edit</div> : null}
      <div>{question.answers?.map((answer) => (
        <div>
          <Answer answer_id={answer.id} questionToggle={questionToggle} setQuestionToggle={setQuestionToggle} users={users} user={user} user_id={answer.user_id} loggedIn={loggedIn} question_id={id} />
        </div>
      ))}</div>
      {loggedIn && addingAnswer == false ? <div onClick={handleAnswerClick}>add answer</div> : null}
      {addingAnswer &&
        <div>
          <div>Your Answer</div>
          <div>
            <form onSubmit={handleAddAnswer}>
              <input type='text' value={answerContent} onChange={(e) => setAnswerContent(e.target.value)} />
              <input type='submit' />
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default QuestionDetail