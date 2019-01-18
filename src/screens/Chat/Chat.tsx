import * as React from "react";

import { Message, User } from "../types";

import MessageItem from "./MessageItem";

interface Props {
  messages: Message[];
  roomId: string | undefined;
  users: {
    [key: string]: User;
  };
}

interface State {
  message: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const drone = new ScaleDrone("observable-" + props.roomId);

    console.log(drone);
  }

  handleSubmitMessage() {
    const data = {
      name,
      content: this.state.message,
      emoji
    };

    dataChannel.send(JSON.stringify(data));
  }

  render() {
    return (
      <div>
        <section className="balloon container with-title">
          <h2 className="title">99 red baloons</h2>
          <div className="messages">
            {this.props.messages.map(message => (
              <MessageItem
                key={message.id}
                message={message}
                direction={directions[message.senderId]}
                avatar={this.props.users[message.senderId].avatar}
              />
            ))}
          </div>
        </section>
        <section className="form container">
          <div className="field is-inline">
            <input
              type="text"
              id="message_field"
              className="input"
              placeholder="say hello"
              onInput={this.handleInputMessageChange}
            />
          </div>
        </section>
      </div>
    );
  }
}
