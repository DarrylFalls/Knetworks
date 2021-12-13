import Nav from '../Nav/Nav'

const Layout = ({children, loggedIn}) => {
  return (
    <div>
      <div>
        <Nav loggedIn={loggedIn}/>
      </div>
      {children}
    </div>
  )
}

export default Layout