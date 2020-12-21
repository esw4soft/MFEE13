import React, { useState } from 'react'
import { countries, townships, postcodes } from '../data'

function ZipCode() {
  console.log(countries)
  console.log(townships)
  // 記錄資料陣列的索引值
  const [country, setCountry] = useState(-1)

  return (
    <>
      <h1>台灣郵遞區號連動式下拉表單元素</h1>
      <select
        value={country}
        onChange={(event) => {
          // 設定要轉換為數字(索引值)
          setCountry(+event.target.value)
        }}
      >
        {/* 預設值為-1 */}
        <option value={-1}>請選擇縣市</option>
        {/* 從countries提取縣市資料，索引值當作option的值 */}
        {countries.map((v, i) => (
          <option value={i}>{v}</option>
        ))}
      </select>
    </>
  )
}

export default ZipCode
