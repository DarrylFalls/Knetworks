import { useState, useEffect } from 'react'
import { deleteAnswer, editAnswer, getAnswerAndComments, postAnswer, postComment } from '../../services/utils'
import AnswerComment from '../AnswerComment/AnswerComment'
import './Answer.css'



const Answer = ({ answer_id, questionToggle, setQuestionToggle, users, user_id, loggedIn, user, question_id }) => {
  const [answer, setAnswer] = useState('')
  const [answerUser, setAnswerUser] = useState('')
  const [commentToggle, setCommentToggle] = useState(true)
  const [edittingAnswer, setEdittingAnswer] = useState(false)
  const [answerContent, setAnswerContent] = useState('')
  const [addingComment, setAddingComment] = useState(false)
  const [commentContent, setCommentContent] = useState('')
  const [commentNum, setCommentNum] = useState(0)
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    const fetchAnswer = async () => {
      const data = await getAnswerAndComments(answer_id)
      setAnswer(data)
    }
    fetchAnswer()
    const userData = users.find(u => u.id == user_id)
    setAnswerUser(userData)
  }, [questionToggle, commentToggle])

  useEffect(() => {
    setAnswerContent(answer?.content)
    setCommentNum(answer.answer_comments?.length)
  }, [answer])

  const handleEditAnswer = async (e) => {
    e.preventDefault()
    const data = {
      content: answerContent
    }
    const updatedAns = await editAnswer(answer_id, data)
    setEdittingAnswer(false)
    setQuestionToggle(!questionToggle)
  }

  const handleAddComment = async (e) => {
    e.preventDefault()
    const data = {
      content: commentContent,
      user_id: user.id,
      answer_id: answer_id,
      question_id: question_id,
    }
    const newComment = await postComment(data)
    if (newComment) {
      setAddingComment(false)
      setQuestionToggle(!questionToggle)
      setShowComments(true)
      setCommentContent('')
    }
  }

  const handleDeleteAnswer = async () => {
    const oldAnswer = await deleteAnswer(answer_id)
    if (oldAnswer) {
      setEdittingAnswer(false)
      setQuestionToggle(!questionToggle)
    }
  }

  return (
    <div className='main-answer-div'>
      {edittingAnswer ? 
        <div className='edit-answer-form-div'>
          <form onSubmit={handleEditAnswer} className='edit-answer-form'>
            <input type='text' value={answerContent} onChange={(e) => setAnswerContent(e.target.value)} className='edit-answer-content-input' />
            <br />
            <input type='submit' className='edit-answer-submit-button'/>
          </form>
        </div>
        : <div className='answer-content-display-div'>{answer?.content}</div>}
      {edittingAnswer && <div onClick={handleDeleteAnswer} className='delete-answer-button'>delete</div>}
      <div className='answer-username-div'>- {answerUser && answerUser.username}</div>
      {loggedIn && edittingAnswer == false && user_id == user.id ? <div onClick={() => setEdittingAnswer(true)} className='edit-answer-button'>edit answer</div> : null}
      <div onClick={() => setShowComments(!showComments)} className='num-of-comments-div'>{commentNum} {commentNum === 1 ? 'comment' : 'comments'}</div>
      {showComments && <div className='comment-list-container-div'>{answer.answer_comments?.map((comment) => (
        <div className='comment-list-div'>
          <AnswerComment comment_id={comment.id} content={comment.content} user_id={comment.user_id} users={users} user={user} loggedIn={loggedIn} commentToggle={commentToggle} setCommentToggle={setCommentToggle} />
        </div>
      ))}</div>}
      {loggedIn && addingComment === false ? <div onClick={() => setAddingComment(true)} className='add-comment-button'>+ add comment</div> : null}
      {addingComment && 
        <div className='add-comment-container-div'>
          <div className='add-comment-title-div'>Add Your Comment</div>
          <form onSubmit={handleAddComment} className='add-comment-form'>
            <textarea value={commentContent} onChange={(e) => setCommentContent(e.target.value)} className='add-comment-content-input' />
            <br/>
            <input type='submit' className='add-comment-submit-button' />
          </form>
        </div>
      }
    </div>
  )
}

export default Answer