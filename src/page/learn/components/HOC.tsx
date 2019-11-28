import React from 'react'
import HelloClass from './Class'


interface Loading {
  loading: boolean
}

function HelloHoc<P>(params?: any) {
  return function<P>(WrappedComponent: React.ComponentType<P>) { // P表示被包装组件的属性类型
    return class NewComponent extends React.Component<P & Loading> { // 
      render() {
        return this.props.loading ? <div>Loading...</div> : <WrappedComponent {...this.props as P} />
      }
    }
  }
}

export default HelloHoc()(HelloClass)