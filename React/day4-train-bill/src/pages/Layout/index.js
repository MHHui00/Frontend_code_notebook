import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      Layout<br></br>
      <Link to={'/'}>to month</Link><br></br>
      <Link to={'/year'}>to year</Link><br></br>
      <Link to={'/new'}>to new </Link><br></br>
      <Outlet />
    </div>
  )
}

export default Layout