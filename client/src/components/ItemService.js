import axios from 'axios';

class ItemService {

    sendData(data) {
        axios.post('http://localhost:4200/items/add/post', {
            item: data
        })
        .then((response) => {
            this.setState({
                items: response.data
            })
        })
        .then((error) => {
            console.log(error);
        });
    }

    updateDate(data, id) {
        axios.post('http://localhost:4200/items/update/'+id, {
            item: data
        })
        .then((response) => {
            this.setState({
                items: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default ItemService;
