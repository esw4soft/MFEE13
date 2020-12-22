import React from 'react'

class ClassLifeCycle extends React.Component {
  // 掛載(mounting)
  constructor(props) {
    super(props)
    this.state = { total: 0 }
    console.log('constructor')
  }

  // 掛載(mounting)
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

  // 更新階段的生命周期方法
  componentDidUpdate() {
    console.log('componentDidUpdate')
    // 可以得到最終更新的狀態值
    console.log('total(狀態): ', this.state.total)
  }

  // 掛載(mounting) + 更新(updating)
  render() {
    console.log('render')
    return (
      <>
        Class : LifeCycle
        <hr />
        {/* 利用id或class讓其它的程式獲取dom介面物件 */}
        <button id="clickme">按我一下</button>
        <hr />
        {/* 觀察更新階段使用 */}
        <h1
          onClick={() =>
            this.setState({ total: this.state.total + 1 })
          }
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default ClassLifeCycle
