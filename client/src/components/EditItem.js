import React, { Component } from 'react';
import axios from 'axios';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ''
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
        .then((response) => {
            this.setState({
                items: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Edit Item:
                        <input
                            type="text"
                            value={this.state.items.item}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default EditItem;
