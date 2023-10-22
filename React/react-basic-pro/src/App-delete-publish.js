import { useRef, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import lodash from 'lodash'
import classNames from 'classnames'
import {v4 as uuid}from'uuid'
import dayjs from'dayjs'

const list = [
  {
    "rpid": 3,
    "user": {
      "uid": "13258165",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "周杰伦"
    },
    "content": "哎哟，不错哦",
    "ctime": "10-18 08: 15",
    "like": 126
  },
  {
    "rpid": 2,
    "user": {
      "uid": "36080105",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "许嵩"
    },
    "content": "我寻你千百度 日出到迟暮",
    "ctime": "11-13 11: 29",
    "like": 88
  },
  {
    "rpid": 1,
    "user": {
      "uid": "30009257",
      "avatar": "http://toutiao.itheima.net/resources/images/98.jpg",
      "uname": "黑马前端"
    },
    "content": "学前端就来黑马",
    "ctime": "10-19 09: 00",
    "like": 66
  }
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}
// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {
  //
  const [commentList, setCommentList] = useState(lodash.orderBy(list, 'like', 'desc'));   //初始話狀態變量時就經過一次排序

  //
  const deleteItem = (id) => {
    setCommentList(commentList.filter((item) => item.rpid !== id))
  }

  const [type, setType] = useState('hot');
  const highLightTab = (type) => {
    setType(type)
    //review 排序。用lodash 方法，返回一個新的數組給setCommentList，觸發更新
    if (type === 'hot') {
      setCommentList(lodash.orderBy(commentList, 'like', 'desc'))
    } else {
      setCommentList(lodash.orderBy(commentList, 'ctime', 'desc'))
    }
  }

  const [content, setContent] = useState('');
  //review useRef：React 獲取Dom元素的方法。 1.初始化，useRef（null）， 2.目標dom綁定： ref = 接收初始化的變量para， 3. 使用： para.current 就是目標dom
  const inputRef = useRef(null)
  const publish = () => {
    const newComment  = {
        "rpid": uuid(), //review 利用uuid包，生產隨機數
        "user": {
          "uid": user.uid,
          "avatar": user.avatar,
          "uname": user.uname,
        },
        "content": content,
        // "ctime": "10-19 09: 00",
        "ctime": dayjs().format('MM-DD HH: mm'),
        "like": 66
    };
    setCommentList([
      ...commentList,
      newComment,
    ])
    //clear
    setContent('')

    //re focus
    inputRef.current.focus();
    // console.log(inputRef.current);

  }




  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item => <span
              key={item.type}

              // className={`nav-item ${type === item.type && 'active'}`}

              className={classNames('nav-item', { active: item.type === type })}
              onClick={() => highLightTab(item.type)}
            >{item.text}</span>)}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            {/* review  */}
            <textarea
              className='reply-box-textarea'
              type='text'
              value={content}
              onChange={(e) => { setContent(e.target.value) }}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={publish} ref={inputRef}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {/* {commentList.map(item => <Item key={item.id} item={item} onDel={handleDel} />)} */}
          {commentList.map(item => (
            <div key={item.rpid} className="reply-item">
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                  />
                </div>
              </div>
              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    <span className="reply-time">{item.ctime}</span>
                    <span className="reply-time">点赞数:{item.like}</span>

                    {item.user.uid === user.uid &&
                      <span className="delete-btn" onClick={() => deleteItem(item.rpid)}>删除</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default App
