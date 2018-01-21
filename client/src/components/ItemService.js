import axios from 'axios';

class ItemService {
    sendData(data) {
        axios.post('http://localhost:4200/items/add/post', {
            item: data
        })
        .then((response) => {
            console.log(response);
        })
        .then((error) => {
            console.log(error);
        });
    }
}

export default ItemService;
