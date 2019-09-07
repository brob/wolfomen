const blogTools = require("eleventy-plugin-blog-tools");


module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByTag('posts').reverse();
    });

    eleventyConfig.addPassthroughCopy('admin/config.yml');


    eleventyConfig.addPlugin(blogTools);


    return {
        dir: {
            includes: "_includes",
            input: "src",
            output: "dist"
        }
    }
}
