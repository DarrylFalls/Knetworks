import Nav from '../Nav/Nav'

const Layout = ({children, loggedIn, user, setLoggedIn}) => {
  return (
    <div>
      <div>
        <Nav loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn}/>
      </div>
      {children}
    </div>
  )
}

export default Layout