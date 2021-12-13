import {useParams} from 'react-router-dom'

const QuestionDetail = () => {
  const {id} = useParams()
  return (
    <div>individual question #{id}</div>
  )
}

export default QuestionDetail