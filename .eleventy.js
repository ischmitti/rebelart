module.exports = function (eleventyConfig){

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addWatchTarget("assets");
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    return{
        dir: {
            input: "src",
            output: "public",
        },
    };
};