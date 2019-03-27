import React, { Component } from 'react';
import $ from "jquery";

export default class Modal extends Component {
    componentDidMount() {
        $(`#${this.props.id}`).modal();
    }

    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id={this.props.id}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.body}
                        </div>
                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
