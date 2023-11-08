//review ！優化總結
# 性能優化

## 打包的體積
利用CDN，減少要打包的工具，減少體積

## 加載： 動態地加載組件
### 路由渲染
lazy 懶加載

### 組件渲染：當事件發生 但與子組件內容沒有影響，用什麼手段阻止默認的子渲染
react.memo 包含整個子組件，prop變化時才渲染。 props變化與否本質上對每一個props做object.is 比較新舊的值
    1. 簡單類型時：object.is比較的就是表面上的值是否相等

    2. 複雜類型（引用類型）時：object.is比較的就是他們的內存地址是否相等。！！所以讓props的引用地址保持不變才能防止多餘渲染，而不是保持裡面的值不變！！
    * prop 為數組、對象，使用靜態內存存儲props的變量   useMemo/useState ，否則父組件重新渲染時，變量會被重新創建 
    * prop 為函數時（函數也是引用類型），（子傳父時prop為函數的引用），使用useCallBack（）包含此函數。並且使用空依賴，即語句只運行了一次，引用就不會被改變了




//review day10-content
Nov 8
* react.memo ("memo"是"memoization"的缩写,記憶化)，當子組件的props（properties）發生變化時，才去渲染子組件
* 回顧 useMemo （memo是memory的全稱）有依賴項，一般用於放置吃資源的計算 或者 複雜類型的props
* callback， 父傳子一個函數，在父中用callback包裹這個函數，空依賴，保持引用地址，不重複渲染子組件
* useRef（null）：react獲取dom。 父獲取子dom：forwardRef（props， refFromFather）；父獲取子function： useImperative（ref,（））