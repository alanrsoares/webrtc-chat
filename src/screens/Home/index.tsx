import * as React from "react";

import { Screen } from "../../types";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 120
  }
};

interface Props {
  style: string;
  onScreenSelection(screen: Screen): void;
}

export default function Home(props: Props) {
  return (
    <div style={styles.container}>
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={() => props.onScreenSelection(Screen.JOIN_CHAT)}
      >
        Join an existing chat
      </button>
      <button
        type="button"
        className="nes-btn is-success"
        onClick={() => props.onScreenSelection(Screen.CREATE_CHAT)}
      >
        Create new chat
      </button>
    </div>
  );
}
