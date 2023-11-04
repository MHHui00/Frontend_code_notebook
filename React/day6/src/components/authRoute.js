import { getTokenKey } from '@/utils';
import { Navigate } from 'react-router-dom';


const AuthRoute = ({children})=>{
    const token = getTokenKey();
    if(token){
        return <>{children}</>
    }else{
        // return <Login/>         //review 錯，只是把Login渲染過來，並不是跳轉過去
        return <Navigate to={'/login'}/>    //review 路由跳轉三： 渲染組件跳轉 <Navigate>。 之前有Link 渲染成a標籤跳轉；useNavigate（）邏輯跳轉。
        
    }
}

export {AuthRoute}


// export function AuthRoute({children}){
//     const token = getTokenKey();
//     if(token){
//         return <>{children}</>
//     }else{
//         return <Login/>
//     }
// }
