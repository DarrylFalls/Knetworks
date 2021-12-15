import { useState, useEffect } from 'react'
import { deleteComment, editComment } from '../../services/utils'


const AnswerComment = ({ content, user_id, users, loggedIn, commentToggle, setCommentToggle, comment_id, user }) => {
  const [edittingComment, setEdittingComment] = useState(false)
  const [commentContent, setCommentContent] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    setCommentContent(content)
    const getUsername = () => {
      const name = users.find(u => u.id === user_id)
      console.log(`user is ${username.username}`)
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
    <div>
      <div>
        {edittingComment ?
          <div>
            <form onSubmit={handleEditComment}>
              <input type='text' value={commentContent} onChange={(e) => setCommentContent(e.target.value)} />
              <input type='submit' />
            </form>
          </div>
          : <div>{content} -{username}</div>}
        {/* {edittingComment && <div onClick={handleDelete}>delete</div>} */}
        {loggedIn && user_id == user.id && edittingComment === false ? <div onClick={() => setEdittingComment(true)}>edit</div> : null}
        {edittingComment && <div onClick={handleDelete}>delete</div>}
      </div>
    </div>
  )
}

export default AnswerComment