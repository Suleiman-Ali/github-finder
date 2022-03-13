import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: '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',
  },
});
