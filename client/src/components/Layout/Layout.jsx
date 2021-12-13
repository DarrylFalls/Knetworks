import Nav from '../Nav/Nav'

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      {children}
    </div>
  )
}

export default Layout