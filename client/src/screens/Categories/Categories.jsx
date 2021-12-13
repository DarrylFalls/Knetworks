import {Link} from 'react-router-dom'

const Categories = ({categories}) => {
  return (
    <div>
      <div>Categories</div>
      {
        categories.map((category) => (
        <div>
          <Link to={`/categories/${category.id}`}>
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories