import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd'
//漢化日期選擇
import locale from 'antd/es/date-picker/locale/zh_CN'

// 导入资源
import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useChannelList } from '@/Hook/useChannelList'
import { useEffect, useState } from 'react'
import { request } from '@/utils'

const { Option } = Select
const { RangePicker } = DatePicker



const Article = () => {
  const navigate = useNavigate()
  //review 利用數組進行枚舉渲染
  const status = {
    2: <Tag color="green">审核通过</Tag>,
    1: <Tag color="warning">待审核</Tag>
  }
  // 准备列数据
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => status[data]  //review 利用數組進行枚舉渲染
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={()=>editArticle(data)} />

            <Popconfirm
              title="确认删除该条文章吗?"
              onConfirm={() => delArticle(data)}
              okText="确认"
              cancelText="取消"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]
  // 准备表格body数据
  // const data = [
  //   {
  //     id: '8218',
  //     comment_count: 0,
  //     cover: {
  //       images: [],
  //     },
  //     like_count: 0,
  //     pubdate: '2019-03-11 09:00:00',
  //     read_count: 2,
  //     status: 2,
  //     title: 'wkwebview离线化加载h5资源解决方案'
  //   }
  // ]

  const { channelList } = useChannelList();


  //review 9.1 篩選
  const [params, setParams] = useState({
    page: 1,
    per_page: 4,
    begin_pubdate: '',
    end_pubdate: '',
    status: '',
    channel_id: ''
  })


  //review 8.5渲染文章列表
  const [articleCount, setArticleCount] = useState('0')
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    const getArticleList = async () => {
      const response = await request({
        url: '/mp/articles',
        method: 'GET',
        params,
      });
      setArticleList(response.data.results)
      setArticleCount(response.data.total_count)
    }
    getArticleList();
  }, [params])


  const clickFilter = (formValue) => {
    console.log(formValue);
    setParams({
      ...params,
      channel_id: formValue.channel_id,
      status: formValue.status,
      begin_pubdate: formValue.date[0].format('YYYY-MM-DD'),
      end_pubdate_pubdate: formValue.date[1].format('YYYY-MM-DD')
    })
  }

  //review 9.3
  const delArticle = async (data)=>{
    console.log(data.id);
    // await request({
    //   url: `mp/articles/${data.id}`,
    //   method: 'DELETE'
    // })
    // setParams({...params})
  }

  //review 9.4 
  const editArticle = (data)=>{
    // console.log(data.id);
    navigate(`/publish?id=${data.id}`)
  }
  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }}
          onFinish={clickFilter}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              initialvalue="請選擇"
              style={{ width: 120 }}
            >
              {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/*  */}
      <Card title={`根据筛选条件共查询到 ${articleCount} 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={articleList}

          //review 9.2.1 頁數
          pagination={{
            total: articleCount,
            pageSize: params.per_page
          }}
          onChange={(value)=>{
            // console.log(value.current);
            setParams({...params, page: value.current})
          }}
        />
      </Card>
    </div>
  )
}

export default Article