// TEST SERVICE *****NOT USED IN APPLICATION*****

import axios from 'axios';
import qs from 'qs';


  async function getAll() {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  }

  // async function getOne(name) {
  //   let res = await axios.get(`/api/product`, {
  //     params: name,
  //     paramsSerializer: (params) => {
  //       return qs.stringify(params, { arrayFormat: 'repeat' })
  //     },
  //   })
  //   return res.data || [];
  // }

  async function getOne(name) {
    let res = await axios.get(`/api/product/${name}`);
    return res.data || [];
  }

  async function deleteProducts(id) {
    let result = await axios.delete(`/api/product/${id}`)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
    return result
  }


export {getAll, deleteProducts, getOne};




// export default {
//   getAll: async () => {
//     let res = await axios.get(`/api/product`);
//     return res.data || [];
//   }
// }

// export default {
//     deleteId: async (id) => {
//         let res = await axios.put('/api/product:id')
//         return res;
//     }
// }

// "start": "react-scripts start",
// "server": "node-env-run server --exec nodemon | pino-colada",
// "dev": "run-p server start"