import * as React from 'react'

export default class Message extends React.Component<{value:string, messages: any[]}> {
  public render() {
    return (
      <div>
      VALUE: {this.props.value}
      MESSAGES: {this.props.value}
      </div>
    )
  }
}
