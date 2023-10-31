import classNames from 'classnames'
import './index.scss'
import { useMemo, useState } from 'react'
import { billTypeToName } from '@/content'
import Icon from '@/component/Icon'


const DailyBill = ({ date, bill }) => {

  const dayBill = useMemo(() => {
    const pay = bill.filter(item => item.type === 'pay').reduce((pre, curr) => pre + curr.money, 0)
    const income = bill.filter(item => item.type === 'income').reduce((pre, curr) => pre + curr.money, 0)
    return {
      pay,
      income,
      total: pay + income,
    }
  }, [bill])
  // console.log(dayBill);

  const [visible, setVisible] = useState(false)

  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow', { expand: visible })} onClick={() => { setVisible(!visible) }}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayBill.pay}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayBill.income}</span>
          </div>
          <div className="balance">
            <span className="money">{dayBill.total}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>

      {/* 詳細信息 */}
      <div className="billList" style={{ display: visible ? 'block' : 'none' }}>
        {bill.map(item => {
          return (
            <div className="bill" key={item.id}>
              <Icon type={item.useFor}/>
              <div className="detail">
                {/* 內容映射 */}
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DailyBill