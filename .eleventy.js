module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js"); // look for these folders

  return {
    addPassthroughFileCopy: true, // copy passthrough files
    dir: {
      input: "src", // layouts, html ...
      output: "_site", // you can pick any foldername you want
      include: "includes", // where do you want your views
    },
  };
};
