import axios from 'axios';


export default {
  phoneNumbers: {
    generate: (numberOfPhonenumbers) => axios.post('api/v1/phonenumbers', numberOfPhonenumbers),
    getNumberInfo: () => axios.get('api/v1/phonenumbers'),
    download: () => axios({
      url: 'api/v1/download',
      method: 'GET',
      responseType: 'blob',
  }),
  }
};
