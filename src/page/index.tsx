import React from 'react'
import propTypes from 'prop-types'

export interface PageProps {
  helloString? : string
}

class indexPage extends React.Component<PageProps, any> {
  static propType = {
    helloString: propTypes.string
  }

  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <div>
        index
      </div>
    )
  }

}

export default indexPage
