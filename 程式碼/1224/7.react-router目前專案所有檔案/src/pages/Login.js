import React from 'react'

function Login(props) {
  // 從App元件得到兩個屬性值，解構出來
  const { isAuth, setIsAuth } = props

  return (
    <>
      <h1>會員登入頁面</h1>
      <button
        onClick={() => {
          setIsAuth(true)
        }}
      >
        登入
      </button>
      {isAuth ? '會員登入, XXX你好' : '未登入'}
    </>
  )
}

export default Login
