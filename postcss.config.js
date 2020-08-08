module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--m": "(max-width: 600px)" }
        },
        {
          customMedia: { "--t-sm": "(max-width: 600px)" }
        },
        {
          customMedia: { "--t-lg": "(max-width: 768px)" }
        },
        {
          customMedia: { "--d-sm": "(max-width: 992px)" }
        },
        {
          customMedia: { "--d-lg": "(max-width: 1200px)" }
        }
      ]
    }
  }
};
