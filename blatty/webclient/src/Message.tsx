import * as React from 'react'

export default class Message extends React.Component<{message:any}> {
  public render() {
    return (
      <div className="message">
        <div className="message__username">{this.props.message.username}</div>
        <div className="message__message">{this.props.message.message}</div>
      </div>
    )
  }
}
