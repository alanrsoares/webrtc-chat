import * as React from "react";

import { ModalFooter } from "../../components/styled";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 150
  }
};

interface Props {
  style: string;
}

const JoinChat = (props: Props) => (
  <div style={styles.container}>
    <div className="nes-field">
      <label htmlFor="join_room_input">Enter room id:</label>
      <input type="text" id="join_room_input" className="nes-input" autoFocus />
    </div>
    <ModalFooter>
      <button className="nes-btn is-error">Cancel</button>
      <button className="nes-btn is-success">Join</button>
    </ModalFooter>
  </div>
);

export default JoinChat;
