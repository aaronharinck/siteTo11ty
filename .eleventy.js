module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js"); // look for these folders

  return {
    addPassthroughFileCopy: true, // copy passthrough files
    markdownTemplateEngine: "njk", //use nunjuks for easier markdown
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src", // layouts, html ...
      output: "_site", // you can pick any foldername you want
      includes: "includes", // where do you want your views
    },
  };
};
