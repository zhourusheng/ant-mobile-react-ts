import React from 'react';
// import propTypes from 'prop-types'

import SimpleCard from '../components/Card'

export interface DetailPageProps {
  // helloString? : string
}

class DetailPage extends React.Component<DetailPageProps, any> {
  // static propType = {
  //   helloString: propTypes.string
  // }

  // constructor(props: any) {
  //   super(props)
  // }

  render() {
    return(
      <div>
        详情页面
        <SimpleCard />
      </div>
    )
  }

}

export default DetailPage;