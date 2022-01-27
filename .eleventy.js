module.exports = function (eleventyConfig){

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/admin")

    return{
        dir: {
            input: "src",
            output: "public",
        },
    };
};