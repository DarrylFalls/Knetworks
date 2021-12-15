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
      setAnswerContent('')
    }
  }

  const handleDeleteQuestion = async () => {
    const oldQuestion = await deleteQuestion(id)
    if (oldQuestion) {
      navigate(`/`)
    }
  }

  return (
    <div className='main-question-detail-div'>
      {edittingQuestion ?
        <div className='edit-question-form-div'>
          <form onSubmit={handleEditQuestion} className='edit-question-form'>
            <input type='text' value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} className='edit-question-content-input' />
            <input type='submit' className='edit-question-submit-button'/>
          </form>
        </div>
        : <div className='question-content-display-div'>{question?.content}</div>}
      {edittingQuestion && <div onClick={handleDeleteQuestion} className='delete-question-button' >delete</div>}
      {loggedIn && user?.id == question.user_id && edittingQuestion == false ? <div onClick={handleEditClick} className='edit-question-button'>edit</div> : null}
      <div className='answer-list-container-div'>{question.answers?.map((answer) => (
        <div className='answer-list-div'>
          <Answer answer_id={answer.id} questionToggle={questionToggle} setQuestionToggle={setQuestionToggle} users={users} user={user} user_id={answer.user_id} loggedIn={loggedIn} question_id={id} />
        </div>
      ))}</div>
      {loggedIn && addingAnswer == false ? <div onClick={handleAnswerClick} className='add-answer-button'>add answer</div> : null}
      {addingAnswer &&
        <div className='adding-answer-display-div'>
          <div className='your-answer-div'>Your Answer</div>
          <div className='add-answer-form-div'>
            <form onSubmit={handleAddAnswer} className='add-answer-form'>
              <input type='text' value={answerContent} onChange={(e) => setAnswerContent(e.target.value)} />
              <input type='submit' className='add-answer-content-input'/>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default QuestionDetail