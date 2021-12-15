import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = ({categories}) => {
  return (
    <div className='main-category-div'>
      <div className='category-title-div'>Categories</div>
      <div className='category-link-container-div'>
        {categories.map((category) => (
          <div className='category-link-div'>
            <Link to={`/categories/${category.id}`} className='category-link'>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories