import { useNavigate, useSearchParams, useParams } from "react-router-dom"


function Article() {
    //review 1.路由跳轉2：命令式，一般和邏輯綁定，eg.登錄後自動跳轉
    const navigate = useNavigate();

    //review 2.1 searchParams 接參
    const [params] = useSearchParams()
    let id = params.get('id')
    let name = params.get('name')

    // review 2.2 params 接參
    const parameters = useParams();
    let Pid = parameters.id;
    let Pname = parameters.name;

    return (
        <div>
            {/* 2.1 */}
            <p>2.1 Article from searchParams {id}-{name}</p>

            {/* 2.2 */}
            <p>2.2 Article from params {Pid}-{Pname}</p>

            <button onClick={() => navigate('/login')}>click to login apge</button>
        </div>
    )
}

export default Article