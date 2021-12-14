import { useState, useEffect } from 'react'
import { getAnswerAndComments, postAnswer } from '../../services/utils'
import AnswerComment from '../AnswerComment/AnswerComment'



const Answer = ({ answer_id, answerToggle, setAnswerToggle, users, user_id, loggedIn }) => {
  const [answer, setAnswer] = useState('')
  const [answerUser, setAnswerUser] = useState('')
  const [commentToggle, setCommentToggle] = useState(true)
  const [addingAnswer, setAddingAnswer] = useState(false)
  const [postAnswerFormData, setPostAnswerFormData] = useState({
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
    setAnswerUser(userData)
    console.log(userData)
  }, [commentToggle])

  const numOfComments = () => {
    if (answer.comments) {
      return answer.comments.length
    } else {
      return "0"
    }
  }

  const handleAddAnswer = (e) => {
    e.preventDefault()
    addAnswer()
    setAnswerToggle(!answerToggle)
  }

  const addAnswer= async () => {
    await postAnswer(postAnswerFormData)
  }
  return (
    <div>
      <div>{answer?.content}</div>
      <div>- {answerUser && answerUser.username}</div>
      <div>{answer && numOfComments()} comments</div>
      <div>{answer.comments?.map((comment) => (
        <div>
          <AnswerComment content={comment.content} user_id={comment.user_id} users={users} loggedIn={loggedIn} commentToggle={commentToggle} setCommentToggle={setCommentToggle} />
        </div>
      ))}</div>
      {loggedIn && addingAnswer == false ? <div onClick={() => setAddingAnswer(true)}>add answer</div>: null}
      {addingAnswer &&
        <div>
          <form onSubmit={handleAddAnswer}>
            <input />
          </form>
        </div>}
    </div>
  )
}

export default Answer