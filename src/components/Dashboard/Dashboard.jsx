import React, { Component } from "react";
import Modal from '../Modal/Modal';
import CreateSongModal from '../Modal/CreateSongModal';
import DeleteSongModal from '../Modal/DeleteSongModal';
import EditSongModal from '../Modal/EditSongModal';
import './Dashboard.css';


// Functionality:
// Needs a type passed in
// - Type determines which modal to use
// Needs a submit method passed in

// Necessary properties: submitAction, type, message

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.submitAction = props.submitAction;
        this.state = {
            show: false,
            type: props.type,
            submitAction: props.submitAction,
            message: props.message
        };
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    showModal = () => {
        console.log("Showing");
        this.setState({
            show: true
        })
    }

    render() {
        if (this.state.type === "delete") {
            return (
                <main className="col-sm-10 col-md-6">
                    <DeleteSongModal show={this.state.show} song={this.props.song} hideModal={this.hideModal} submitAction={this.submitAction} />
                    <button class="kbc-button kbc-button-xxs" type="button" onClick={this.showModal}>
                        {this.state.message}
                    </button>
                </main>
            )
        } else if (this.state.type === "edit") {
            return (
                <main className="col-sm-10 col-md-6">
                    <EditSongModal show={this.state.show} song={this.props.song} hideModal={this.hideModal} submitAction={this.submitAction} />
                    <button class="kbc-button kbc-button-xxs" type="button" onClick={this.showModal}>
                        {this.state.message}
                    </button>
                </main>
            )    
        } else if (this.state.type === "create") {
            return (
                <main className="container-fluid" id="centerbutton">
                    <CreateSongModal show={this.state.show} song={this.props.song} hideModal={this.hideModal} submitAction={this.submitAction} />
                    <button class="kbc-button" type="button" onClick={this.showModal}>
                        {this.state.message}
                    </button>
                </main>
            )    
        } else {
            // Defaults to create
            return (
                <main className="col-sm-10 col-md-6">
                    <Modal show={this.state.show} handleClose={this.hideModal} handleSubmit={this.submitAndClose}>
                        {this.state.modalContents}
                    </Modal>
                    <button type="button" onClick={this.showModal}>
                        {this.state.message}
                    </button>
                </main>
            );
        }
    }
}

export default Dashboard;