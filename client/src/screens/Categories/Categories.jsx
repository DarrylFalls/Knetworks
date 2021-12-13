

const Categories = ({categories}) => {
  return (
    <div>
      <div>Categories</div>
      {
      categories.map((category) => (
        <Link to={`/categories/${category.id}`}>
          {category.name}
        </Link>
      ))}
    </div>
  )
}

export default Categories