import * as React from 'react'

export interface NoticePropsType extends React.HTMLProps<HTMLDivElement> {
  duration: number
  onClose: () => {}
  children: React.ReactNode
  update: boolean,
  closeIcon: React.ReactNode
  style: object,
  prefixCls: string,
  closeable: boolean,
  className: string,
}