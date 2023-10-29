import Article from "../page/Article/index";
import Login from "../page/Login/index";
import { createBrowserRouter } from 'react-router-dom'
import { createHashRouter } from 'react-router-dom'
import About from '../page/About/index'
import Board from '../page/Board/index'
import Layout from "../page/Layout";
import NotFound from '../page/NotFound'


//review 4. 路由模式： createHashRouter 和 createBrowserRouter 前者不需要後端配合，後者需要。按需選擇，其餘用法完全一樣
const router = createHashRouter([
// const router = createBrowserRouter([
    {
        //review 3.1 路由嵌套，在總router裡配置父layout的children
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/about',
                element: <About/>,
            },
            {
                //review 3.3 加載父layout時，指定outlet處要默認渲染的children 組件。 用index：true 取代path 即可
                // path: '/board',
                index: true,
                element: <Board/>,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        //2.1
        // path: '/article',

        // review 2.2 配置格式
        path: '/article/:id/:name',

        element: <Article /> 
    },
    {
        path: "*",
        element: <NotFound/>,
    }
])

export default router;
