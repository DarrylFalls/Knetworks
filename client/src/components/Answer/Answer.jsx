import { useState, useEffect } from 'react'
import { getAnswerAndComments } from '../../services/utils'
import AnswerComment from '../AnswerComment/AnswerComment'



const Answer = ({ answer_id, answerToggle, setAnswerToggle, users, user_id, loggedIn }) => {
  const [answer, setAnswer] = useState('')
  const [user, setUser] = useState('')
  const [commentToggle, setCommentToggle] = useState(true)
  const [addingComment, setAddingComment] = useState(false)
  const [postCommentFormData, setPostCommentFormData] = useState({
    content: '',
    user_id: '',
    answer_id: '',
    question_id: ''
  })

  useEffect(() => {
    const fetchAnswer = async () => {
      const data = await getAnswerAndComments(answer_id)
      setAnswer(data)
    }
    fetchAnswer()
    const userData = users.find(u => u.id == user_id)
    setUser(userData)
    console.log(userData)
  }, [commentToggle])

  const numOfComments = () => {
    if (answer.comments) {
      return answer.comments.length
    } else {
      return "0"
    }
  }

  const handleComment = () => {

  }

  const addComment = async () => {

  }
  return (
    <div>
      <div>{answer?.content}</div>
      <div>- {user && user.username}</div>
      <div>{answer && numOfComments()} comments</div>
      <div>{answer.comments?.map((comment) => (
        <div>
          <AnswerComment content={comment.content} user_id={comment.user_id} users={users} />
        </div>
      ))}</div>
      {loggedIn && <div onClick={() => setAddingComment}>add comment</div>}
      {addingComment &&
        <div>
          <form onSubmit={handleComment}>
            <input />
          </form>
        </div>}
    </div>
  )
}

export default Answer