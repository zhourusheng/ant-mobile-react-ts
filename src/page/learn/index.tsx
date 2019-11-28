import React from 'react'

// import { HelloOld, Hello } from './components/Func'
import HelloClass from './components/Class'
// import HelloHoc from './components/HOC'
// import HelloHooks from './components/Hook'


export interface FormProps {
}

class Form extends React.Component<FormProps, any> {

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000)
  }

  render() {
    // const { isLoading } = this.state
    return(
      <div>
        {/* <HelloOld name="周如生" />
        <Hello name="周如生" /> */}
        <div>
          <HelloClass name="Button" />
        </div>
        {/* <div>
          <HelloHoc loading={isLoading} name="周如生" />
        </div> */}
        {/* <div>
          <HelloHooks name="按钮" />
        </div> */}
      </div>
    )
  }

}

export default Form
