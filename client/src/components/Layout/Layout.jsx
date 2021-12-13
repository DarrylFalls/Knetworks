import Nav from '../Nav/Nav'

const Layout = ({children, loggedIn, user}) => {
  return (
    <div>
      <div>
        <Nav loggedIn={loggedIn} user={user} />
      </div>
      {children}
    </div>
  )
}

export default Layout