import * as React from "react";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

interface Props {
  showModal: boolean;
  onClose: () => void;
  onAddEvent: () => void;
}

const AddEventModal: React.FunctionComponent<Props> = props => {
  return (
    <Modal show={props.showModal} handleClose={props.onClose}>
      <>
        <h3>Add new event</h3>
        <Input name="event" />
        <Button onClick={props.onAddEvent}>Add event</Button>
      </>
    </Modal>
  );
};

export default AddEventModal;
