import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { deleteQuestion, editQuestion, getQuestion, postAnswer } from '../../services/utils'
import Answer from '../../components/Answer/Answer'
import './QuestionDetail.css'

const QuestionDetail = ({ loggedIn, user, users }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [question, setQuestion] = useState('')
  const [questionToggle, setQuestionToggle] = useState(true)
  const [edittingQuestion, setEdittingQuestion] = useState(false)
  const [questionContent, setQuestionContent] = useState('')
  const [answerContent, setAnswerContent] = useState('')
  const [addingAnswer, setAddingAnswer] = useState(false)

  useEffect(() => {
    const fetchQuestion = async () => {
      const getQ = await getQuestion(id)
      setQuestion(getQ)
    }
    fetchQuestion()
  }, [questionToggle])

  useEffect(() => {
    setQuestionContent(question?.content)
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
      <div className='question-display-div'>
      {edittingQuestion ?
        <div className='edit-question-form-div'>
          <form onSubmit={handleEditQuestion} className='edit-question-form'>
              <textarea cols='35' row='3' value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} className='edit-question-content-input' />
              <br/>
            <input type='submit' className='edit-question-submit-button'/>
          </form>
        </div>
        : <div className='question-content-display-div'>{question?.content}</div>}
      {edittingQuestion && <div onClick={handleDeleteQuestion} className='delete-question-button' >delete question</div>}
      {loggedIn && user?.id == question.user_id && edittingQuestion == false ? <div onClick={handleEditClick} className='edit-question-button'>edit question</div> : null}
      {loggedIn && addingAnswer == false ? <div onClick={handleAnswerClick} className='add-answer-button'>+ add answer</div> : null}
      {addingAnswer &&
        <div className='adding-answer-display-div'>
          <div className='your-answer-div'>Your Answer</div>
          <div className='add-answer-form-div'>
            <form onSubmit={handleAddAnswer} className='add-answer-form'>
              <textarea value={answerContent} onChange={(e) => setAnswerContent(e.target.value)} />
              <br/>
              <input type='submit' className='add-answer-content-input'/>
            </form>
          </div>
        </div>
      }
      <div className='answer-list-container-div'>{question.answers?.map((answer) => (
        <div className='answer-list-div'>
          <hr/>
          <Answer answer_id={answer.id} questionToggle={questionToggle} setQuestionToggle={setQuestionToggle} users={users} user={user} user_id={answer.user_id} loggedIn={loggedIn} question_id={id} />
        </div>
      ))}</div>
        </div>
    </div>
  )
}

export default QuestionDetail