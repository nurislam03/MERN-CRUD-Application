import React, { Component } from 'react';
import ItemService from './ItemService';


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.addItemService = new ItemService();
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        //alert(this.state.value);
        event.preventDefault();
        this.addItemService.sendData(this.state.value);
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Item:
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <br />
                        <input
                            type="submit"
                            value="submit"
                            className="btn btn-primary"
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default AddItem;
