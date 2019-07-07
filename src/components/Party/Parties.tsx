import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StoreState, Party } from "../../types";
import Button, { ButtonStyle } from "../Button";
import Modal, { ModalSize } from "../Modal";
import Input from "../Form/Input";
import Icon from "../Icon";
import { getParties, addParty } from "../../services/PartyService";
import theme from "../../theme";

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
  background-color: ${theme.colorLightBlue};
  border: 1px solid ${theme.colorBlue};
  box-shadow: 1px 0 10px ${theme.colorGrey};
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

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

interface PartiesProps {
  parties: Array<Party>;
}
interface PartiesState {
  showModal: boolean;
}

class Parties extends React.Component<PartiesProps, PartiesState> {
  public state: PartiesState = {
    showModal: false
  };

  public componentDidMount() {
    getParties();
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
          <Icon>add</Icon> Add new party
        </Button>
        <PartyList>{items}</PartyList>
        <Modal
          title="Add new party"
          show={this.state.showModal}
          handleClose={() =>
            this.setState({
              showModal: false
            })
          }
          size={ModalSize.Small}
        >
          <form onSubmit={this.addNewParty}>
            <CenteredContainer>
              <Input
                name="party"
                placeholder="Party id, ie. summer19"
                required
                minLength={4}
              />
              <StyledButton type="submit" style={ButtonStyle.Blue}>
                Add
              </StyledButton>
            </CenteredContainer>
          </form>
        </Modal>
      </div>
    );
  }

  private onAddParty = () => {
    this.setState({
      showModal: true
    });
  };
  private addNewParty = (event: React.FormEvent<any>) => {
    event.preventDefault();
    const party = (event.currentTarget.elements.party.value || "").trim();
    if (party) {
      addParty(party);
      this.setState({
        showModal: false
      });
    }
  };
}

const mapStateToProps = (state: StoreState) => ({
  parties: state.parties || []
});

export default connect(mapStateToProps)(Parties);
