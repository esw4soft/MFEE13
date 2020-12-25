import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 排版用的元件，全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

// 頁面元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
// withRouter 高階元件樣式(HOC) 範例
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'

function App() {
  // 會員認証範例
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <>
        {/* logo+標頭+導覽列 */}
        <MyNavbar />
        {/* 主內容區 */}
        <MainContent>
          {/* 以下為匹配路徑對用頁面用的路由列表 */}
          <Switch>
            <Route path="/about">
              <About isAuth={isAuth} />
            </Route>
            <Route path="/login">
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            </Route>
            {/* `:id?`是網址上的參數列 */}
            <Route path="/product/baby/:id?">
              <ProductBaby />
            </Route>
            <Route path="/product/men">
              <ProductMen />
            </Route>
            <Route path="/product/women">
              <ProductWomen />
            </Route>

            <Route exact path="/">
              <Home isAuth={isAuth} />
            </Route>
          </Switch>
          {/* end 路由表 */}
        </MainContent>
        {/* 頁尾 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
