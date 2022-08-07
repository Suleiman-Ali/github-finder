import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `${process.env.REACT_APP_MY_API_KEY}`,
  },
});
