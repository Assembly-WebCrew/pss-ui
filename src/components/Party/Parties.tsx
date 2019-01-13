import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import styled from "styled-components";
import { Action, partyActions } from "../../actions/index";
import { IStoreState } from "../../types";
import { Party } from "../../types/index";
import Button from "../Button";
import Modal from "../Modal";

const PartyList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const PartyListItem = styled.li`
  width: 250px;
  height: 100px;
  padding: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
  color: #000b19;
  border: 1px solid #cdcdcd;
  box-shadow: 1px 0 10px #ccc;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: #fafafa;
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: translateY(0);
  }
`;

class Parties extends React.Component {
  public props: any;
  public state: any = {
    showModal: false
  };

  constructor(props: any) {
    super(props);
    this.onAddParty = this.onAddParty.bind(this);
    this.addNewParty = this.addNewParty.bind(this);
  }

  public render() {
    const items = this.props.parties.map((party: Party) => (
      <PartyListItem key={party}>
        <StyledLink to={`/parties/${party}`}>{party}</StyledLink>
      </PartyListItem>
    ));
    return (
      <div>
        <Button onClick={this.onAddParty}>
          <i className="material-icons">add</i> Add
        </Button>
        <PartyList>{items}</PartyList>
        <Modal show={this.state.showModal} handleClose={this.addNewParty}>
          <input />
        </Modal>
      </div>
    );
  }

  private onAddParty() {
    this.setState({
      showModal: true
    });
  }
  private addNewParty() {
    this.setState({
      showModal: false
    });
  }
}

const mapStateToProps = (state: IStoreState) => ({
  parties: state.parties
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators(partyActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parties);
