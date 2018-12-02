import axios from 'axios';


export default {
  phoneNumbers: {
    generate: (numberOfPhonenumbers) => axios.post('api/v1/phoneNumbers', numberOfPhonenumbers),
  }
};
