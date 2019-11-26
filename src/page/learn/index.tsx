import React from 'react'
// import propTypes from 'prop-types'

import { HelloOld, Hello } from './components/Func'

import HelloClass from './components/Class'

export interface FormProps {
}

class Form extends React.Component<FormProps, any> {
  // static propType = {
  // }

  render() {
    return(
      <div>
        <HelloOld name="周如生" />
        <Hello name="周如生" />
        <div>
          <HelloClass name="周如生" />
        </div>
      </div>
    )
  }

}

export default Form
