module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_color.scss";
        `,
      },
    },
  },
};
