import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StoreState, Party } from "../../types";
import Button from "../Button";
import Modal from "../Modal";
import NotImplemented from "../NotImplemented";

const PartyList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const PartyListItem = styled.li`
  width: 250px;
  height: 120px;
  padding: 5px;
`;

const PartyListContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #32a0ef;
  border: 1px solid #1d7ec3;
  box-shadow: 1px 0 10px #ccc;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: translateY(0);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

class Parties extends React.Component {
  public props: any;
  public state: any = {
    showModal: false
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    const items = this.props.parties.map((party: Party) => (
      <PartyListItem key={party}>
        <PartyListContent>
          <StyledLink to={`/parties/${party}`}>{party}</StyledLink>
        </PartyListContent>
      </PartyListItem>
    ));
    return (
      <div>
        <Button onClick={this.onAddParty}>
          <i className="material-icons">add</i> Add
        </Button>
        <PartyList>{items}</PartyList>
        <Modal show={this.state.showModal} handleClose={this.addNewParty}>
          <NotImplemented />
        </Modal>
      </div>
    );
  }

  private onAddParty = () => {
    this.setState({
      showModal: true
    });
  };
  private addNewParty = () => {
    this.setState({
      showModal: false
    });
  };
}

const mapStateToProps = (state: StoreState) => ({
  parties: state.parties
});

export default connect(mapStateToProps)(Parties);
