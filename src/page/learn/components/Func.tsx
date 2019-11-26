import React from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string,
  firstName?: string,
  lastName?: string
}

// 有类型约束的函数组件


// 没有使用 React.FC
const HelloOld = (props: Greeting) => <Button>你好~{props.name}</Button>


// 使用React.FC 泛类型
const Hello: React.FC<Greeting> = (props) => {
  return(
    <Button>嘿嘿嘿~{props.name}</Button>
  )
}



export { HelloOld, Hello }
