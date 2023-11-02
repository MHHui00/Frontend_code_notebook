import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { fetchLogin } from '@/store/modules/user' 
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form 
        validateTrigger='onBlur'
        //review 看文檔，onfinish = 檢查通過，並點擊‘submit’類型的按鈕觸發的時間
        onFinish={
          async (value)=>{
            await dispatch(fetchLogin(value))
            //review !!即使在 fetchLogin 函数内部，你确实已经在 action creator 中使用了 dispatch，但外部调用 fetchLogin(value) 时，你仍然需要使用 dispatch 来触发整个异步 action
            //当你在另一个文件中调用 fetchLogin(value) 时，它实际上是一个 thunk 函数，这是 Redux 中用于处理异步操作的一种方式。这个 thunk 函数在内部使用 dispatch 来触发 setToken action，但你需要使用外部的 dispatch 来触发整个 thunk 函数。
            
            navigate ('/')
            message.success('登錄成功')

          }
        } 

        >
          <Form.Item
            name='mobile'
            type= 'string'
            rules={[{ required: true, message: '手機不能为空' }, {min: 5, message: '長度不足5'}]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[{ required: true, message: '驗證碼不能为空' }]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login