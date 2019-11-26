import React from 'react'
import { Button } from 'antd'
import propTypes from 'prop-types'

export interface FormProps {
  helloString? : string
}

class Form extends React.Component<FormProps, any> {
  static propType = {
    helloString: propTypes.string
  }

  render() {
    return(
      <div>
         <Button type="primary">Button</Button>
      </div>
    )
  }

}

export default Form
