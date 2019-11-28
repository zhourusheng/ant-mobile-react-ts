import * as React from 'react'

export interface NotificationPropsType extends React.HTMLProps<HTMLDivElement> {
  prefixCls: string
  transitionName: string
  animation: string | object
  style: object
  maxCount: number,
  closeIcon: React.ReactNode
}