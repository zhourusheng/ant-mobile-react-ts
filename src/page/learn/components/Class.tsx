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

  render() {
    const { count } = this.state
    const { name } = this.props
    return (
      <Fragment>
        <p>点击了{count}次</p>
        <Button
          onClick={() => this.setState({ count: count + 1 })}
        >Class~~{name}</Button>
      </Fragment>
    )
  }
}

export default HelloClass