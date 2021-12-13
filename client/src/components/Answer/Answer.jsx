import { useState, useEffect } from 'react'
import { getAnswerAndComments } from '../../services/utils'
import AnswerComment from '../AnswerComment/AnswerComment'



const Answer = ({ id, answerToggle, setAnswerToggle, users }) => {
  const [answer, setAnswer] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    const fetchAnswer = async () => {
      const data = await getAnswerAndComments(id)
      setAnswer(data)
    }
    fetchAnswer()
    const userData = users.find(u => u.id == answer.user_id)
    setUser(userData)
  }, [])
  return (
    <div>
      <div>{answer?.content}</div>
      <div>{user?.username}</div>
      <div>{answer.comments?.map((comment) => (
        <div>
          <AnswerComment content={comment.content} user_id={comment.user_id} users={users}/>
        </div>
      ))}</div>
    </div>
  )
}

export default Answer