import React, { useState } from 'react'
import MoneyInput from './MoneyInput'

function Converter(props) {
  //用於輸入值使用的狀態
  const [twd, setTwd] = useState('')
  const [usd, setUsd] = useState('')

  // 注意：本數字運算只會四捨五入，不夠精準只作範例用
  // 美金轉新台幣(無小數點)
  const usd2Twd = (usd) => (28.53 * usd).toFixed(0)
  // 新台幣轉新台幣(二位小數點)
  const twd2Usd = (twd) => (twd / 28.53).toFixed(2)

  return (
    <>
      <h1>美金-新台幣互轉應用程式</h1>
      {/* 可控表單元素範例：值(value)對應狀態值(inputValue)，更動方法(onChange)對應狀態設定方法(setInputValue) */}
      <MoneyInput
        title="新台幣"
        money={twd}
        setMoney={(newValue) => {
          // 設定新台幣的值(文字輸入框)
          setTwd(newValue)
          // 設定轉換後的美金(文字輸入框)
          setUsd(twd2Usd(newValue))
        }}
      />
      <hr />
      <MoneyInput
        title="美金"
        money={usd}
        setMoney={(newValue) => {
          // 設定美金的值(文字輸入框)
          setUsd(newValue)
          // 設定轉換後的新台幣(文字輸入框)
          setTwd(usd2Twd(newValue))
        }}
      />
    </>
  )
}

export default Converter
