import React, { useState } from 'react'

function MoneyInput(props) {
  // 解構賦值，簡化props要使用的識別名稱
  const { title, money, setMoney } = props

  return (
    <>
      {title}：
      <input
        type="text"
        value={money}
        onChange={(event) => {
          setMoney(+event.target.value)
        }}
      />
    </>
  )
}

export default MoneyInput
