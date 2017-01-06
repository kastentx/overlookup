var axios = require('axios')

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getBattleTagData: function(username) {
    return axios.get('https://owapi.net/api/v2/u/' + username + '/stats/general?region=us')
      .then(function(user) {
        return user.data
    }).catch(function(err) {
      console.warn('Error in getBattleTagData', err)
    })
  }
}

module.exports = helpers