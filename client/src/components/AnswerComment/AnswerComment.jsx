import { useState, useEffect } from 'react'
import { deleteComment, editComment } from '../../services/utils'
import './AnswerComment.css'


const AnswerComment = ({ content, user_id, users, loggedIn, commentToggle, setCommentToggle, comment_id, user }) => {
  const [edittingComment, setEdittingComment] = useState(false)
  const [commentContent, setCommentContent] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    setCommentContent(content)
    const getUsername = () => {
      const name = users.find(u => u.id === user_id)
      setUsername(name.username)
    }
    getUsername()
  }, [])

  

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

  const handleDelete = async () => {
    const oldComment = await deleteComment(comment_id)
    if (oldComment) {
      setEdittingComment(false)
      setCommentToggle(!commentToggle)
    }
  }
  return (
    <div className='main-comment-div'>
      <div className='edit-comment-container-div'>
        {edittingComment ?
          <div className='edit-comment-form-div'>
            <form onSubmit={handleEditComment} className='edit-comment-form'>
              <input type='text' value={commentContent} onChange={(e) => setCommentContent(e.target.value)} className='edit-comment-content-input' />
              <input type='submit' className='edit-comment-submit-button' />
            </form>
          </div>
          : <div className='comment-content-display-div'>{content} -{username}</div>}
      </div>
      {loggedIn && user_id == user.id && edittingComment === false ? <div onClick={() => setEdittingComment(true)} className='edit-comment-button'>edit comment</div> : null}
      {edittingComment && <div onClick={handleDelete} className='delete-comment-button'>delete</div>}
    </div>
  )
}

export default AnswerComment