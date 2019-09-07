module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByTag('posts').reverse();
    });

    return {
        dir: {
            includes: "_includes",
            input: "src",
            output: "dist"
        }
    }
}
