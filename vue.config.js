module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_mixins.scss";
                    @import "@/assets/styles/_functions.scss";
                `
      }
    }
  }
};
