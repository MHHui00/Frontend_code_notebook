import { Link } from "react-router-dom"

function Login() {
    return (
        <div>
            <p>This is login page</p>
            {/* review 1.路由跳轉1：聲明式，一般與模塊綁定，menu跳轉 */}
            {/* <Link to={'/article'}>jump to article page</Link> */}

            {/* review 2.1 searchParams 傳參 ？x=1&y=2 */}
            <Link to={'/article?id=123&name=tom'}>jump to article page 帶變量searchParams</Link>    <br></br>

            {/* review 2.2 params 傳參 ， 需要在總router配置格式*/}
            <Link to={'/article/123/tom'}>jump to article page 帶變量params</Link>

        </div>
    )
}

export default Login