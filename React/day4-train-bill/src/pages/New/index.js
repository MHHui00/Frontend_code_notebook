import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '@/component/Icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/content'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { submitBillList } from '@/store/module/billStore'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'

const New = () => {
  const navigate = useNavigate()
  const [billType, setBillType] = useState('pay');

  //提交数据
  //事實獲取輸入的狀態
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [useFor, setUseFor] = useState('')
  const submitBill = () => {
    const submitData = {
      type: billType,
      money: billType === 'income' ? +value : -value,
      date: date,
      useFor: useFor,
    }
    dispatch(submitBillList(submitData));
    console.log(submitData);
  }

  //
  const [dateVisible, setDateVisible] = useState(false)
  const [date, setDate] = useState(new Date())

  const confirmEvent = (date)=>{
    setDate(date)
    console.log(date);
  }
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === 'pay' && 'selected')}
            onClick={() => setBillType('pay')}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === 'income' && 'selected')}
            shape="rounded"
            onClick={() => setBillType('income')}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>{dayjs(date).format('YYYY/MM/DD')}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onClose={() => setDateVisible(false)}
                onCancel={() => setDateVisible(false)}
                onConfirm={confirmEvent}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={value}
                onChange={(num) => setValue(num)}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        { selected: item.type === useFor }
                      )}
                      key={item.type}
                      //
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={submitBill}>
          保 存
        </Button>
      </div>
    </div>
  )
}

export default New