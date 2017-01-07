var axios = require('axios')

var helpers = {
  getBattleTagData: function(username) {
    return axios.get('https://owapi.net/api/v3/u/' + username + '/stats')
      .then(function(user) {
        return {
          name: username, 
          damage: user.data.us.stats.quickplay.average_stats.damage_done_avg,
          heals: user.data.us.stats.quickplay.average_stats.healing_done_avg,
          wins: user.data.us.stats.quickplay.overall_stats.wins,
          comprank: user.data.us.stats.quickplay.overall_stats.comprank,
          avatar: user.data.us.stats.quickplay.overall_stats.avatar
        }
    }).catch(function(err) {
      console.warn('Error in getBattleTagData', err)
    })
  }
}

module.exports = helpers