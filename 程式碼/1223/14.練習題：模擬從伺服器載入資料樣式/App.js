import React, { useState, useEffect, useRef } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import { data } from './data/'

function App() {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // componentDidMount
  useEffect(() => {
    //開始載入資料，先出現spinner
    setIsLoading(true)

    // 從伺服器得到資料，然後設定到students狀態
    setStudents(data)

    // 最後關起spinner，改呈現真正資料
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const spinner = (
    <>
      <div
        className="spinner-grow text-success"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-danger"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  const display = (
    <table className="table table-bordered table-striped">
      <thead className="thead-light">
        <th>座號</th>
        <th>姓名</th>
        <th>生日</th>
      </thead>
      <tbody>
        {students.map((v, i) => (
          <tr key={i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.birth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <>
      <MyNavbar />
      <MainContent>
        {isLoading ? spinner : display}
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
