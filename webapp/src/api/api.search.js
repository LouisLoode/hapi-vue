import axios from 'axios'

const api = {}

export default api


}


/**
 * New user search
 */

api.search = function (payload) {

  return new Promise((resolve, reject) => {

    axios.post(`search/`, payload)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })

  })

}

}
