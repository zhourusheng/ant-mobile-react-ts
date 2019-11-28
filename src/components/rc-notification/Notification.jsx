import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Animate from 'rc-animate'
import PropTypes from 'prop-types'
import createChainedFunction from 'rc-util/lib/createChainedFunction';

// import { NotificationPropsType } from './NotificationPropsType'
import Notice from './Notice'

let seed = 0
const now = Date.now()

function getUuid() {
  return `rcNotification_${now}_${seed++}`
}

class Notification extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    transitionName: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    style: PropTypes.object,
    maxCount: PropTypes.number,
    closeIcon: PropTypes.node,
  };

  static defaultProps = {
    prefixCls: 'rc-notification',
    animation: 'fade',
    style: {}
  }

  state = {
    notices: []
  }

  getTransitionName() {
    const { transitionName, animation, prefixCls } = this.props
    let newTranstionName = transitionName
    if (!transitionName && animation) {
      newTranstionName = `${prefixCls}-${animation}` 
    }
    return newTranstionName
  }

  add = (notice) => {

  }

  remove = (key) => {

  }

  render() {
    const { notices } = this.state
    const {
      prefixCls,
      closeIcon,
      className,
      style
    } = this.props

    const noticeNodes = notices.map((notice, index) => {
      const update = Boolean(index === notices.length - 1 && notice.updateKey)
      const key = notice.updateKey ? notice.updateKey : notice.key
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose)
      return (
        <Notice
          prefixCls={prefixCls}
          closeIcon={closeIcon}
          {...notice}
          key={key}
          update={update}
          onClose={onClose}
          onClick={notice.onClick}
        >
          {notice.content}
        </Notice>
      )
    })

    const allClassName = {
      prefixCls: true,
      className
    }
    return (
      <div className={classNames(allClassName)} style={style}>
        <Animate transitionName={this.getTransitionName()}>{noticeNodes}</Animate>
      </div>
    )
  }
}

Notification.newInstance = function newNotificationInstance(properties, callback) {
  ReactDOM.render(<Notification />)
}

export default Notification