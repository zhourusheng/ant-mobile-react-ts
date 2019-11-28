import React, { Fragment } from 'react' 
import { Button } from 'antd'

interface Greeting {
  name: string,
  firstName?: string,
  lastName?: string
}

interface State {
  count: number
}

// 有类型约束的类组件

// 泛型类型，第一个参数约束属性 props, 第二个约束 state
class HelloClass extends React.Component<Greeting, State> {
  // 定义 state, 类型是 State
  state: State = {
    count: 0
  }

  // defaultProps
  static defaultProps = {
    firstName: '',
    lastName: ''
  }

  // 事件绑定
  handleClick = (e: React.MouseEvent) =>{
    e.persist()
    console.log(e)
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }

  render() {
    const { count } = this.state
    const { name } = this.props
    return (
      <Fragment>
        <p>点击了{count}次</p>
        <Button
          onClick={this.handleClick}
        >Hello{name}Class</Button>
        <input type="text" onChange={this.handleInput} />
      </Fragment>
    )
  }
}

export default HelloClass