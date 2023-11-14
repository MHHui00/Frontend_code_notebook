# day1 基本狀態管理&常用庫
* useState
  * 狀態變量，通過數組結構獲得，只有通過特定的函數才可以改變他的值。一旦發生變化引起頁面的重新渲染
* 在react中循環渲染時需要為標籤添加key值
* useRef：獲取dom
* lodash庫：各種排序算法合集
* uuid庫：生成隨機數
* classNames庫：管理類名
* 邏輯中斷來實現條件渲染
* navigator bar點擊項目高亮思路，點擊了哪個用一個usestate裝，渲染時條件判斷渲染

# day2 組件之間的溝通
* 父傳子： return子組件時附帶參數property（props），子組件的到包含參數的對象。子無法修改傳來的參數
* 子傳父： return子組件時附帶一個函數作為參數（一般on開頭 eg: onSend={getMeg}），子通過調用該函數並傳參來傳送
* 兄弟互傳：子1傳父，父（利用useState）更新得到的data，觸發渲染。傳遞新的props給子2，實現
* 跨層級的傳遞：利用createContext。在組件之外聲明一個createContext（）實例。頂層通過 <ctx.Provider> 裝載數據。 底層通過useContext（ctx）獲取數據
* fetch：瀏覽器自帶的請求，需要.json() 或 .text()等，來提取返回的data

* ## useEffect
    初始渲染：組件渲染完成後才會執行的語句
  * 三種狀態：
    1. 沒有依賴：初始渲染 + 任何狀態變量的更新 執行
    2. 空依賴 []：初始渲染完成後執行一次就不再執行
    3.  依賴數組內放一個變量 [num]：初始渲染 + 變量變化就會觸法執行
  * useEffect內的一般先定義一個函數，然後再立即調用。就可以實現async await等異步變同步的操作
  * 如果裡面有定時器這類函數，需要在useeffect內return一個匿名函數，關閉這個定時器

# day3 Redux   ‘@reduxjs/toolkit’ ‘react-redux’
* capsulation
  * 自己封裝一個hook，useToggle（）、useFetch（）
* redux
  * 創建slice，導出reducer和state.action
  * 在一個地方匯集所有slice，變成一個store
  * 渲染時用privoder包裹
  * 目標組件內useSelector獲得變量的值，useDispatch得到實例，在該實例內調用action
  * 異步的寫法？放在useEffect裡面
* 案例功能實現
  * toFixed（）
  * reduce（）
* ### 一個狀態需要被多個組件使用時，才用redux管理。否則useState即可

# day4 Router  “react-router-dom”
### 架構
* createHashRouter 和 createBrowserRouter 
  * 前者不需要後端配合，後者需要。按需選擇，其餘用法完全一樣
  * 配置path，渲染的組件，子路由
* 程序入口用RouterProvider包裹，並提供router參數，為配置好的路由

### 跳轉
* 聲明式跳轉：Link標籤 
* 命令式跳轉：useNavigate()
* 跳轉時傳參
  * searchParams 傳參：/example？name=qwe&id=123
    * 接？
  * params 傳參：/example/qwe/123   ！需要在總router配置格式！
    * 接？
### 路由嵌套用法
* router配置子路由
* 父組件配置outlet標籤來制定子組件的渲染位置


# day5，6 記帳案例trainning
* 基於antd-mobile套件的案例
* dayjs庫
* useMemo
  * 放置消耗資源的計算代碼，依賴項改變了才重新計算
  * 結果存放在內存里
* 記帳App各種功能的實現

# day7，8，9 博客案例trainning
* useLocation 獲取當前路由路徑信息
* 各種功能實現，上傳博客、圖片
* echarts庫，各種圖表的渲染
* token持續化
* 對axios進行封裝
  * 請求攔截，自動添加token
  * 響應攔截，根據不同錯誤碼進行頁面跳轉
* 在組件return中，使用Navigate標籤進行跳轉（第三種路由方法）
* 配置webpack，利用CDN優化應用的大小。動態插入CDN資源的引用url
* lazy懶路由，當點擊對應組件時才加載，節省首次打開網頁的時間

# day10 更高效的工具 + 更多優化方案
* 組件渲染優化
  * 利用react.memo，阻止默認的子組件渲染行為（父組件需要重新渲染時）
  * useCallback
  * 本質上是判斷傳給子組件的props有無變化
    * props為簡單類型和複雜類型（引用類型）時，要用不同的處理方式。eg. useMemo/useState
* useReducer，可替代useState，但功能更強大？
* useRef
    * 獲取子組件dom元素
      * forwardRef
    * 獲取子組件的function
      * useImperativeHandle 把函數暴露給父組件
    * useImperative
* 舊版的React組件是以Class來封裝的，而不是新版的用函數
  * 類組件的寫法
  * 類組件的狀態管理寫法
  * componentDidMount（相當於構造函數）
  * componentWillUnmount（相當於析構函數）
  * 類組件之間的數據傳遞，父傳子，子傳父
* 比Redux更輕量化且簡潔的狀態管理庫：zuStand
  * 異步邏輯一樣簡潔，封裝

# day11
* TypeScript了解