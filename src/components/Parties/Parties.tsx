import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { Action, partyActions } from '../../actions/index';
import { IStoreState } from '../../types';
import { Party } from '../../types/index';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './Parties.css';

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
    const items = this.props.parties.map((party: Party) => (<li key={party}><Link to={`/parties/${party}`}>{party}</Link></li>));
    return (
      <div>
        <Button onClick={this.onAddParty}><i className="material-icons">add</i> Add</Button>
        <ul className="Party-list">{items}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Parties);