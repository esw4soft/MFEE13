import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function MemberEdit(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [member, setMember] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let { id } = useParams()

  async function getMember(id) {
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await fetch(
        'http://localhost:5555/users/' + id,
        {
          method: 'get',
        }
      )

      // ok只能判斷201-299狀態碼的情況
      if (response.ok) {
        // 剖析資料為JS的數值
        const data = await response.json()

        // 設定資料到member狀態
        setMember(data)

        // 設定到每個欄位
        setName(data.name)
        setEmail(data.email)
        setUsername(data.username)
        setPassword(data.password)
      }
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  // componentDidMount
  useEffect(() => {
    // 共用同一個元件作新增或更新
    if (props.type === 'edit') {
      getMember(id)
    }
  }, [props.type, id])

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
    <>
      <div className="form-group">
        <label htmlFor="nameInput">姓名</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          aria-describedby="nameInput"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <label htmlFor="exampleInput">Email</label>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          aria-describedby="exampleInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label htmlFor="usernameInput">帳號</label>
        <input
          type="text"
          className="form-control"
          id="usernameInput"
          aria-describedby="usernameInput"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <label htmlFor="passwordInput">密碼</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          aria-describedby="passwordInput"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <button className="btn btn-primary">
        {props.type === 'new' ? '新增' : '更新'}
      </button>
    </>
  )

  return (
    <>
      <h1>
        會員管理 - {props.type === 'new' ? '新增' : '編輯'}
      </h1>
      {isLoading ? spinner : display}
    </>
  )
}

export default MemberEdit
