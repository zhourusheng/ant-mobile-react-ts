import React from 'react'
// import propTypes from 'prop-types'

import { Link } from 'react-router-dom'

// eslint-disable-next-line
export interface PageProps {
}

// eslint-disable-next-line
class indexPage extends React.Component<PageProps, any> {
  static propType = {
  }

  render() {
    return(
      <div>
        <Link to="/navBar">navBar</Link>
      </div>
    )
  }

}

export default indexPage
