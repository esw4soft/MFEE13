import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <>
        {/* logo+標頭+導覽列 */}
        <MyNavbar />
        {/* 主內容區 */}
        <MainContent>
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>

          {/* 以下為匹配路徑對用頁面用的路由列表 */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
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
