import * as React from "react";

import { Message, BalloonDirection } from "./types";

interface Props {
  message: Message;
  direction: BalloonDirection;
  avatar: string;
}

interface State {
  isHovering: boolean;
}

export default class MessageItem extends React.Component<Props, State> {
  state = {
    isHovering: false
  };

  handleMouseEnter = () => {
    this.setState({ isHovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { direction, avatar, message } = this.props;
    return (
      <div
        className={`message -${direction}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {direction === "left" ? (
          <React.Fragment>
            <i className={`${avatar} ${this.state.isHovering && "animate"}`} />
            <div className={`balloon from-${direction}`}>
              <p>{message.text}</p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={`balloon from-${direction}`}>
              <p>{message.text}</p>
            </div>
            <i className={`${avatar} animate`} />
          </React.Fragment>
        )}
      </div>
    );
  }
}
