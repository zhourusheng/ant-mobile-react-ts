import React from 'react'

import NavBar from '../../components/nav-bar'


interface PageProps {

}

class NavBarPage extends React.Component<PageProps, any> {
  render() {
    return (
      <div>
       <NavBar
        mode="dark"
        leftContent="Back"
        rightContent="Right"
        onLeftClick={() => console.log('onLeftClick')}
       >导航栏</NavBar>
      </div>
    )
  }
}

export default NavBarPage