import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DailyBill from './components/DayBill'

const Month = () => {
  //review 2. dayjs
  const [onView, setOnView] = useState(false);
  const [date, setDate] = useState(() => { return dayjs(new Date()).format('YYYY/MM') });


  //review 3. ! useMemo：可以理解為條件執行的語句，用於計算/處理一些較複雜的運算，條件依賴變化時，才重新計算，節省資源。
  //review 3. lodash
  const { billList } = useSelector(state => state.bill)
  const sortedDataMonth = useMemo(() => {
    return _.groupBy(billList, (item) => { return dayjs(item.date).format('YYYY/MM') }) //review 巧妙用法
  }, [billList])
  // console.log(sortedDataMonth);


  //review 4. 大量計算，使用useMemo， filter過濾支出還是收入，reduce計算所有結果。返回一個對象，渲染。
  const [monthData, setMonthData] = useState([]);
  const monthResult = useMemo(() => {
    const pay = monthData.filter(item => item.type === 'pay').reduce((pre, curr) => pre + curr.money, 0)
    const income = monthData.filter(item => item.type === 'income').reduce((pre, curr) => pre + curr.money, 0)
    return {
      pay,
      income,
      total: pay + income,
    }
  }, [monthData])

  //5. 第一次進入時顯示本月的結算內容
  useEffect(() => {
    const currentDate = dayjs(new Date()).format('YYYY/MM')
    if (sortedDataMonth[currentDate]) {
      setMonthData(sortedDataMonth[currentDate])
    }else {
      setMonthData([]); // 或者根据需要设置一个默认值
    }
  }, [sortedDataMonth])//review !?只有當進來的時候運行一次，[]就代表運行一次，為什麼報警告需要加依賴項
  //你的代码中使用了 monthResult 和 setMonthData，这两个都是外部变量。即使你不打算在它们改变时重新运行副作用，React 的 lint 规则还是会建议你将它们添加到依赖项数组中。这是一个预防 bug 的最佳实践，因为如果你的副作用依赖于某些外部变量，而你忘记了将它们添加到依赖项数组中，那么当这些变量改变时，你的副作用将不会重新运行，可能会导致 bug。
  //如果你确定 monthResult 和 setMonthData 在组件的生命周期内不会改变，或者即使它们改变，你也不希望副作用重新运行，你可以忽略这个警告。但是请注意，这可能会导致潜在的 bug。



  const confirmEvent = (date) => {
    // console.log(date);
    const formatedDate = dayjs(date).format('YYYY/MM')
    setDate(formatedDate)

    //review 4. 之前渲染的已選擇日期 變量 剛好與sortedDataMonth的屬性名符合。將對應的月份數據存到一個狀態變量，觸發更新
    if (sortedDataMonth[formatedDate]) {
      console.log(11);
      setMonthData(sortedDataMonth[formatedDate])
    }else {
      setMonthData([]); // 或者根据需要设置一个默认值
    }

  }

  //6. 日帳單
  const sortedDataDay = useMemo(() => {
    const groupData = _.groupBy(monthData, (item) => { return dayjs(item.date).format('YYYY/MM/DD') });
    const keys = Object.keys(groupData)
    return {
      keys,
      groupData
    }
  }, [monthData])




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
        {sortedDataDay.keys.map((key)=>{
          return <DailyBill key={key} date={key} bill={sortedDataDay.groupData[key]}/>//review object[para] 相當於先讀取para裡的值(若para= ‘key’)，再執行object.key
        })}
        {/* 日帳單 */}
      </div>
    </div >
  )
}

export default Month