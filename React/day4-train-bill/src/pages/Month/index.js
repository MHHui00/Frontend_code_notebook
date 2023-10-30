import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {
  //review 2. dayjs
  const [onView, setOnView] = useState(false);
  const [date, setDate] = useState(() => { return dayjs(new Date()).format('YYYY/MM') });


  //review 3. ! useMemo：可以理解為條件執行的語句，用於計算/處理一些較複雜的運算，條件依賴變化時，才重新計算，節省資源。
  //review 3. lodash
  const { billList } = useSelector(state => state.bill)
  const sortedData = useMemo(() => {
    return _.groupBy(billList, (item) => { return dayjs(item.date).format('YYYY/MM') }) //review 巧妙用法
  }, [billList])
  // console.log(sortedData);

  
  //review 4. 大量計算，使用useMemo， filter過濾支出還是收入，reduce計算所有結果。返回一個對象，渲染。
  const [monthData, setMonthData] = useState([]);
  const monthResult = useMemo(() => {
    const pay = monthData.filter(item => item.type === 'pay').reduce((pre, curr) => pre + curr.money, 0)
    const income = monthData.filter(item => item.type === 'income').reduce((pre, curr) => pre + curr.money, 0)
    return{
      pay,
      income,
      total: pay+income,
    }
  }, [monthData])

  
  const confirmEvent = (date) => {
    // console.log(date);
    const formatedDate = dayjs(date).format('YYYY/MM')
    setDate(formatedDate)

    //review 4. 之前渲染的已選擇日期 變量 剛好與sortedData的屬性名符合。將對應的月份數據存到一個狀態變量，觸發更新
    setMonthData(sortedData[formatedDate])

  }

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setOnView(true)}>
            <span className="text">
              {date + ''}账单
            </span>
            <span className={classNames('arrow', onView && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={onView}
            max={new Date()}

            //
            //review 1. 看文檔內容配置動作
            onClose={() => setOnView(false)}
            onCancel={() => setOnView(false)}
            onConfirm={confirmEvent}  //邏輯較多，抽離成單獨函數方便管理
          />
        </div>
      </div>
    </div >
  )
}

export default Month