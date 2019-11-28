import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
  firstName?: string
  lastName?: string
}

const HelloHooks = (props: Greeting) => {
  const [ count, setCount ] = useState(0) // 设置初始值，所以不用定义类型
  const [ text, setText ] = useState<string | null>(null)

  useEffect(() => {
    count > 5 && setText('休息一下')
  }, [count])

  return (
    <div>
      <p>你点击了Hooks {count} 次, {text}</p>
      <Button
        onClick={() => setCount(count + 1)}
      >{props.name}</Button>
    </div>
  )
}

export default HelloHooks