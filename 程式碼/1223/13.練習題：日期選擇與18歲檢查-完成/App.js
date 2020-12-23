import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'

registerLocale('zh-TW', zhTW)

function App() {
  const [birth, setBirth] = useState(new Date())
  const [age, setAge] = useState(0)

  // ~~為轉為整數值
  const calcAge = (birth) =>
    ~~((new Date() - birth) / 31557600000)

  // 選完日期就改變年紀
  // componentDidUpdate
  useEffect(() => {
    setAge(calcAge(birth))
  }, [birth])

  return (
    <>
      <MyNavbar />
      <MainContent>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={birth}
          locale="zh-TW"
          onChange={(date) => setBirth(date)}
        />
        <h2>{age > 18 ? '滿18歲' : '未滿18歲'}</h2>
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
