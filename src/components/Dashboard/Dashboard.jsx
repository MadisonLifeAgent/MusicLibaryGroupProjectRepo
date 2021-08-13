import React, { Component } from "react";
import Modal from '../Modal/Modal';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            modalContents: props.contents,
            message: props.message
        };
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <main>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    {this.state.modalContents}
                </Modal>
                <button type="button" onClick={this.showModal}>
                    {this.state.message}
                </button>
            </main>
        );
    }
}

export default Dashboard;