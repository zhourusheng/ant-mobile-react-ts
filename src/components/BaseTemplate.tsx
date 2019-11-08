import React from 'react'
import propTypes from 'prop-types'
import moduleCss from './index.module.scss'

export interface FormProps {
  helloString? : string
}

class Form extends React.Component<FormProps, any> {
  static propType = {
    helloString: propTypes.string
  }

  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <div className={moduleCss.Form}>
        {this.props.helloString}
      </div>
    )
  }

}

export default Form;
