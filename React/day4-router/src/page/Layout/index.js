import { Link, Outlet } from "react-router-dom";

const Layout = ()=>{
    return (
        <div>
            <p>Layout page</p>
            <Link to={'/about'}>about</Link> <br></br>

            {/* review 3.4 再次點擊board 跳轉到父layout即可 */}
            <Link to={'/'}>board</Link> <br></br>


            {/* review 3.2 在父layout裡跳轉到children組件時，會在 outlet 的位置顯示 */}
            <Outlet/>

        </div>
    )
}

export default Layout;