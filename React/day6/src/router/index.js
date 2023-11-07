import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { AuthRoute } from '@/components/authRoute'
// import Home from '@/pages/Home'
// import Article from '@/pages/Article'
// import Publish from '@/pages/Publish'
import { Suspense, lazy } from 'react'

//review 優化！！懶路由 優化初次打開時間
//1: 用lazy函數導入組件
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><Layout /></AuthRoute>,
        children: [
            {
                path: '/',
                // 2. 對渲染的組件使用 react內置的 suspense 包裹，並添加fallback參數。fallback提供占位（渲染完成之前要顯示什麼）
                element: <Suspense fallback={'Loading'}><Home /></Suspense>
            },
            {
                path: '/article',
                element: <Suspense fallback={'Loading'}><Article /></Suspense>
            },
            {
                path: '/publish',
                element: <Suspense fallback={'Loading'}><Publish /></Suspense>
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
])

export default router;