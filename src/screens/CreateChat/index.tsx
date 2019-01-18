import * as React from "react";

import { ModalFooter } from "../../components/styled";

interface Props {
  style: string;
  hash: string;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 250
  }
};

export default (props: Props) => (
  <div style={styles.container}>
    <div className="nes-field">
      <label htmlFor="room_hash">Enter room name:</label>
      <input
        type="text"
        id="room_hash"
        className="nes-input"
        placeholder={props.hash}
        autoFocus
      />
    </div>
    <div className="nes-field">
      <label htmlFor="user_name">Enter your name:</label>
      <input
        type="text"
        id="user_name"
        className="nes-input"
        placeholder="Your name"
        autoFocus
      />
    </div>
    <ModalFooter>
      <button className="nes-btn is-error">Cancel</button>
      <button className="nes-btn is-success">Create</button>
    </ModalFooter>
  </div>
);
