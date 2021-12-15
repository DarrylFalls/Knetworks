import { useState, useEffect } from 'react'
import { deleteAnswer, editAnswer, getAnswerAndComments, postAnswer, postComment } from '../../services/utils'
import AnswerComment from '../AnswerComment/AnswerComment'



const Answer = ({ answer_id, questionToggle, setQuestionToggle, users, user_id, loggedIn, user, question_id }) => {
  const [answer, setAnswer] = useState('')
  const [answerUser, setAnswerUser] = useState('')
  const [commentToggle, setCommentToggle] = useState(true)
  const [edittingAnswer, setEdittingAnswer] = useState(false)
  const [answerContent, setAnswerContent] = useState('')
  const [addingComment, setAddingComment] = useState(false)
  const [commentContent, setCommentContent] = useState('')

  useEffect(() => {
    const fetchAnswer = async () => {
      const data = await getAnswerAndComments(answer_id)
      setAnswer(data)
    }
    fetchAnswer()
    const userData = users.find(u => u.id == user_id)
    setAnswerUser(userData)
    console.log(userData)
  }, [questionToggle, commentToggle])

  useEffect(() => {
    setAnswerContent(answer?.content)
  }, [answer])

  const numOfComments = () => {
    if (answer.comments) {
      return answer.comments.length
    } else {
      return "0"
    }
  }

  const handleEditAnswer = async (e) => {
    e.preventDefault()
    const data = {
      content: answerContent
    }
    const updatedAns = await editAnswer(id, data)
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
    <div>
      {edittingAnswer ? 
        <div>
          <form onSubmit={handleEditAnswer}>
            <input type='text' value={answerContent} onChange={(e) => setAnswerContent(e.target.value)} />
            <input type='submit' />
          </form>
        </div>
        : <div>{answer?.content}</div>}
      {edittingAnswer && <div onClick={handleDeleteAnswer} >delete</div>}
      <div>- {answerUser && answerUser.username}</div>
      {loggedIn && edittingAnswer == false && user_id == user.id ? <div onClick={() => setEdittingAnswer(true)}>edit answer</div> : null}
      <div>{answer && numOfComments()} comments</div>
      <div>{answer.comments?.map((comment) => (
        <div>
          <AnswerComment comment_id={comment.id} content={comment.content} user_id={comment.user_id} users={users} user={user} loggedIn={loggedIn} commentToggle={commentToggle} setCommentToggle={setCommentToggle} />
        </div>
      ))}</div>
      {loggedIn && <div>add comment</div>}
      {addingComment && 
        <div>
        <div>Add Your Comment</div>
        <form onSubmit={handleAddComment}>
          <input type='text' value={commentContent} onChange={(e) => setCommentContent(e.target.value)} />
          <input type='submit' />
        </form>
        </div>
      }
      
    </div>
  )
}

export default Answer