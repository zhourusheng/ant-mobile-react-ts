import React from 'react';
// import propTypes from 'prop-types'

import SimpleCard from '../components/Card'

export interface OrderPageProps {
  // helloString? : string
}

class OrderPage extends React.Component<OrderPageProps, any> {
  // static propType = {
  //   helloString: propTypes.string
  // }

  // constructor(props: any) {
  //   super(props)
  // }

  render() {
    return(
      <div>
        <SimpleCard />
        <SimpleCard/>
        <SimpleCard />
        <SimpleCard />
      </div>
    )
  }

}

export default OrderPage;