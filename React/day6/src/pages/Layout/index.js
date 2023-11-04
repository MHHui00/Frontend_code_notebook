import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchUserInfo, clearUserInfo } from '@/store/modules/user'

const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  //review 7.1. 跳转
  const navigate = useNavigate();
  const menuClick = (item) => {
    // console.log('111')
    navigate(item.key)
    // console.log(location);
    // console.log(location.pathname);
  }

  //review 7.2. 自动高亮当前显示的 item
  //review 7.2.1 useLocation 獲取當前路由路徑信息
  const location = useLocation();

  //review 7.3. 顯示用戶名
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])
  const { userInfo } = useSelector(state => state.user)

  //review 7.4. logOut function
  const logOut = ()=>{
    dispatch(clearUserInfo());
    navigate('/login')
  }


  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消"
              onConfirm={logOut}  //7.4. logOut
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[location.pathname]}   //7.2.2 check discription doc
            items={items}
            style={{ height: '100%', borderRight: 0 }}
            //点击跳转路由
            onClick={menuClick} //review 7.1.1 看文档，要配合menu的item 使用。onclick里面放的是一个function，这个function的形参是一个类，包含item, key, keyPath, domEvent这几个属性
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout