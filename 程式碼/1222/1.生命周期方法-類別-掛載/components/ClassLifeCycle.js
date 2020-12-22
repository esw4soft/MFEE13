import React from 'react'

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('constructor')
  }

  // 可確保虛擬DOM元素已呈現在網頁上的一個重要方法
  componentDidMount() {
    console.log('componentDidMount')

    // 裡面可以使用一般的js或jquery的dom處理語法
    document
      .getElementById('clickme')
      .addEventListener('click', function () {
        alert('你好')
      })
  }

  render() {
    console.log('render')
    return (
      <>
        Class : LifeCycle
        {/* 利用id或class讓其它的程式獲取dom介面物件 */}
        <button id="clickme">按我一下</button>
      </>
    )
  }
}

export default ClassLifeCycle
