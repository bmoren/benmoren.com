module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("source/css");

    // Return your Object options:
    return {
    // pathPrefix: "/eleventy-base-blog/", //might want this for GH pages?
      dir: {
        input: "source",
        output: "public_html"
      }
    }
  };