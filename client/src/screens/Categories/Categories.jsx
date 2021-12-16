import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = ({categories}) => {
  return (
    <div className='main-category-div'>
      <div className='category-title-div'>CATEGORIES</div>
      <div className='category-link-container-div'>
        {categories.map((category) => (
          <div className='category-link-div'>
            <Link to={`/categories/${category.id}`} className='category-link'>
              {category.name?.toUpperCase(0)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories