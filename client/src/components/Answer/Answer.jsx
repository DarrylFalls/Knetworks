import { useState, useEffect } from 'react'
import { getAnswerAndComments } from '../../services/utils'
import AnswerComment from '../AnswerComment/AnswerComment'



const Answer = ({ id, answerToggle, setAnswerToggle, users }) => {
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    const fetchAnswer = async () => {
      const data = await getAnswerAndComments(id)
      setAnswer(data)
    }
    fetchAnswer()
  }, [])
  return (
    <div>
      <div>{answer?.content}</div>
      <div></div>
      <div>{answer.comments?.map((comment) => (
        <div>
          <AnswerComment content={comment.content} user_id={comment.user_id}/>
        </div>
      ))}</div>
    </div>
  )
}

export default Answer