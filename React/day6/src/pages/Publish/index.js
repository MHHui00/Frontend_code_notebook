//review day8
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { request } from '@/utils'

const { Option } = Select

const Publish = () => {

  //review 8.1 fetch channelList
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    //declear a function; then call it
    const getChannelList = async () => {
      const response = await request.get('/channels');
      setChannelList(response.data.channels)
    }
    getChannelList();
  }, [])

  //review 8.2 submitForm
  const onFished = (formValue) => {
    if(imageList.length !== imageType) return message.warning('圖片數量不正確')
    const { title, content, channel_id } = formValue;

    //準備參數
    const params = {
      channel_id,
      content,
      title,
      cover: {
        type: imageType,
        images: imageList.map(item=>item.response.data.url)
      }
    }

    //提交請求
    request({
      url: '/mp/articles?draft=false',
      method: 'POST',
      data: params
    })
  }

  //review 8.3 upload image
  const [imageList, setImageList] = useState([])
  const onUploadChange = (value) => {
    // console.log(value);
    setImageList(value.fileList)
  }
  //圖片類型的狀態
  const [imageType, setImageType] = useState('0')
  const onChangeType = (e)=>{
    // console.log(e.target.value);
    setImageType(e.target.value)
  }

 
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }} //review 8.3.2 初始化type
          onFinish={onFished}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          {/* review 8.3  */}
          <Form.Item label="封面">
            {/* review 8.3.3 type 初始值決定默認選哪項 */}
            <Form.Item name="type"> 
              <Radio.Group onChange={onChangeType}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* review 8.3.4 邏輯中斷，控制顯示上傳組件。 設置最大上傳數量，maxCount，用imageType控制 */}
            {imageType > 0 &&
              <Upload
                listType="picture-card"
                showUploadList
                action={'http://geek.itheima.net/v1_0/upload'}  //
                onChange={onUploadChange} //
                maxCount={+imageType}
                name='image'
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            }
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />

          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish