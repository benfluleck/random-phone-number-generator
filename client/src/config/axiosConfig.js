import axios from 'axios';


export default {
  phoneNumbers: {
    generate: (numberOfPhonenumbers, query) => axios.post(`api/v1/phonenumbers?order=${query}`, numberOfPhonenumbers),
    getNumberInfo: () => axios.get('api/v1/phonenumbers'),
    download: () => axios({
      url: 'api/v1/download',
      method: 'GET',
      responseType: 'blob',
    }),
  }
};
