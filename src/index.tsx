import * as React from "react";
import { render } from "react-dom";

import { randomHash } from "./utils";

import Home from "./screens/Home";
import JoinChat from "./screens/JoinChat";
import CreateChat from "./screens/CreateChat";
import Chat from "./screens/Chat";

import { Screen } from "./types";

import "./style.css";

const styles = {
  landing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
};

interface Props {
  roomId?: string;
}

interface State {
  roomId?: string;
  screen: Screen;
  previousScreen?: Screen;
}

class App extends React.Component<Props, State> {
  state = {
    roomId: null,
    screen: Screen.LANDING,
    previousScreen: undefined
  };

  navigate(screen: Screen) {
    this.setState(state => ({ screen, previousScreen: state, screen });
  }

  renderScreen() {
    switch (this.state.screen) {
      case Screen.JOIN_CHAT:
        return this.renderJoinChatScreen();
      case Screen.CREATE_CHAT:
        return this.renderCreateChatScreen();
      default:
        return (
          <Home onScreenSelection={(screen) => this.navigate(screen)} />
        );
    }
  }

  renderJoinChatScreen() {
    return (
      <JoinChat style={styles.landing} />
    );
  }

  renderCreateChatScreen() {
    const hash = randomHash();

    return (
      <CreateChat style={styles.landing} hash={hash} />
    );
  }

  render() {
    return this.state.roomId ? (
      <Chat roomId={this.state.roomId} />
    ) : (
        <div>
          <div className="nes-container">
          {this.renderScreen()}
          </div>
        </div>
      );
  }

  handleBackButtonClick = () => {
    this.navigate(this.state.previousScreen);
  };
}

render(
  <App roomId={window.location.hash.slice(1)} />,
  document.getElementById("root")
);
