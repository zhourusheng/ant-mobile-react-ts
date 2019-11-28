import React from 'react'
import classNames from 'classnames'

import { NoticePropsType } from './NoticePropsType'

export default class Notice extends React.Component<NoticePropsType, any> {
  static defaultProps = {
    duration: 1.5,
    onClose: () => {},
    style: {
      right: '50%'
    }
  }

  closeTimer: any = null

  componentDidMount() {
    // 启动关闭组件的定时器
    this.startCloseTimer()
  }

  componentDidUpdate(prevProps: NoticePropsType) {
    const { duration, update } = this.props
    if (duration !== prevProps.duration
      || update) {
      this.restartCloseTimer()
    }
  }

  componentWillUnmount() {
    // 卸载组件，清除定时器
    this.clearCloseTimer()
  }

  close = (e?: any) => {
    if (e) {
      e.stopPropagation()
    }
    this.clearCloseTimer()
    this.props.onClose()
  }

  startCloseTimer = () => {
    const { duration } = this.props
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, duration * 1000)
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  restartCloseTimer() {
    this.clearCloseTimer()
    this.startCloseTimer()
  }

  render() {
    const {
      prefixCls,
      closeable,
      className,
      style,
      onClick,
      children,
      closeIcon
    } = this.props

    const componentClass = `${prefixCls}-notice`
    const allClassNames = {
      componentClass,
      [`${componentClass}-closeable`]: closeable,
      className
    }

    return (
      <div
        className={classNames(allClassNames)}
        style={style}
        onMouseEnter={this.clearCloseTimer}
        onMouseLeave={this.startCloseTimer}
        onClick={onClick}
      >
        <div className={`${componentClass}-content`}>{children}</div>
        {
          closeable ? 
            <a tabIndex={0} onClick={this.close} className={`${componentClass}-close`}>
              {closeIcon || <span className={`${componentClass}-close-x`} />}
            </a> : null
        }
      </div>
    )
  }
}