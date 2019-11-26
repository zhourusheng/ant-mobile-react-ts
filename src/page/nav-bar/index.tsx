import React from 'react'

import NavBar from '../../components/nav-bar'


interface PageProps {

}

class NavBarPage extends React.Component<PageProps, any> {
  render() {
    return (
      <div>
       <NavBar>title</NavBar>
      </div>
    )
  }
}

export default NavBarPage