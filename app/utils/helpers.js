var axios = require('axios')

var helpers = {
  getBattleTagData: function(username) {
    return axios.get('https://owapi.net/api/v3/u/' + username + '/stats')
      .then(function(user) {
        return user.data
    }).catch(function(err) {
      console.warn('Error in getBattleTagData', err)
    })
  }
}

module.exports = helpers