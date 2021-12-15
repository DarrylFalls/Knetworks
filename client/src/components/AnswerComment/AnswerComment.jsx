import { useState, useEffect } from 'react'
import { editComment } from '../../services/utils'


const AnswerComment = ({ content, user_id, users, loggedIn, commentToggle, setCommentToggle, comment_id, user }) => {
  const [edittingComment, setEdittingComment] = useState(false)
  const [commentContent, setCommentContent] = useState('')

  useEffect(() => {
    setCommentContent(content)
  }, [])

  const getUsername = () => {
    const username = users.find(user => user.id === user_id)
    return username.username
  }

  const handleEditComment = async (e) => {
    e.preventDefault()
    const data = {
      content: commentContent,
    }
    const updatedComment = await editComment(comment_id, data)
    if (updatedComment) {
      setEdittingComment(false)
      setCommentToggle(!commentToggle)
    }
  }
  return (
    <div>
      <div>
        {edittingComment ?
          <div>
            <form onSubmit={handleEditComment}>
              <input type='text' value={commentContent} onChange={(e) => setCommentContent(e.target.value)} />
              <input type='submit' />
            </form>
          </div>
          : <div>{content} -{getUsername}</div>}
        {loggedIn && user_id == user.id && edittingComment === false}
        {edittingComment && <div onClick={handleDelete}>delete</div>}
      </div>
    </div>
  )
}

export default AnswerComment