appService.factory("gw2api", function (Restangular) {
  return {

    getAchievements: function () {
      return Restangular.service('achievements');
    },
    getAchievement:  function (id) {
      return this.getAchievements().one(id).get();
    },

    getDaily: function () {
      return this.getAchievements().one('daily').get();
    }
  }
});
