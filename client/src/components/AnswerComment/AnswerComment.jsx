import { useState, useEffect } from 'react'


const AnswerComment = ({ content, user_id, users, loggedIn, commentToggle, setCommentToggle }) => {
  const [edittingComment, setEdittingComment] = useState(false)
  return (
    <div>
      <div>
        {edittingComment ?
          <div></div>
        : <div>{content}</div>}
      </div>
    </div>
  )
}

export default AnswerComment