module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByTag('posts').reverse();
    });

    eleventyConfig.addPassthroughCopy('**/*.yml');

    return {
        dir: {
            includes: "_includes",
            input: "src",
            output: "dist"
        }
    }
}
