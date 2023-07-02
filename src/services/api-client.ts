import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8066a5b9b4c54c3eb4a74042f4e4ce05',

    }
})