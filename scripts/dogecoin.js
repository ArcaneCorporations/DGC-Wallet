// Imports
const axios = require('axios');

// Settings
let APIKEY = '';
let bURL = 'https://block.io/api/v2/';
let config = {headers: {"Access-Control-Allow-Origin": "*"}};

class DGCWallet {
  makeWallet(lbl) {
    lbl = (lbl) ? `&label=${lbl}` : '';
    return new Promise((resolve,reject) => {
      axios.get(bURL+'get_new_address?api_key='+APIKEY+lbl).then(res => { resolve(res.data); })
    })
  }

  getBalance(addr) {
    return new Promise((resolve,reject) => {
      if (!addr) { reject('Enter your Address.'); }
      axios.get(bURL+'get_address_balance?api_key='+APIKEY+`&addresses=${addr}`).then(res => { resolve(res.data); })
    })
  }
}

module.exports = new DGCWallet();
