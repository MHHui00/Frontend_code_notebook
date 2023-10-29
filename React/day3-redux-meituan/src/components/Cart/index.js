import classNames from 'classnames'
import Count from '../Count'
import './index.scss'

import { useSelector, useDispatch } from 'react-redux'
import { clearCart, increaseCartItem, decreaseCartItem } from '../../store/modules/takeaway'

import { useState } from 'react'

const Cart = () => {
  const { cartList } = useSelector(state => state.foods)
  const totalPrice = cartList.reduce((pre, curr) => { return pre + curr.price * curr.count }, 0)
  const dispatch = useDispatch();

  //review 5.別的組件不需要用到該狀態，控制介面遮罩，用useStare就夠了
  const [isViewing, setView] = useState(false);
  
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        // className={classNames('cartOverlay', isViewing && 'visible')}
        className={classNames('cartOverlay', { visible: isViewing })}
        onClick={() => { setView(false) }}  //進入購物車添加visible
      />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        {/* review 3.3 classNames */}
        {/* review 5. 點擊icon的時候 購物車有東西才開啟效果 */}
        <div className={classNames('icon', { fill: cartList.length > 0 })} onClick={() => cartList.length > 0 ? setView(true) : ''}>
          {/* review 3.1 購物車裡有東西，才顯示小圓點 */}
          {cartList.length > 0 && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {/* review 3.2 reduce方法求和， toFixed（）取小數*/}
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {/* review 3.4  */}
        {cartList.length > 0 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      {/* 點擊購物車添加visible */}
      <div className={classNames('cartPanel', { visible: isViewing})}>
        <div className="header">
          <span className="text">购物车</span>
          {/* review 4 */}
          <span className="clearCart" onClick={() => dispatch(clearCart())}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  {/* review 4 */}
                  <Count
                    count={item.count}
                    onMinus={() => dispatch(decreaseCartItem({ id: item.id }))}
                    onPlus={() => dispatch(increaseCartItem({ id: item.id }))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
