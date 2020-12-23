import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'

registerLocale('zh-TW', zhTW)

function App() {
  const [birth, setBirth] = useState(new Date())

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
        <button onClick={() => {}}>檢查是否滿18歲</button>
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
