import WPRestAPI from "./wprestjs";

let wp = new WPRestAPI("https://demo.wp-api.org/wp-json/wp/v2");

wp.getPosts({
    number: 3
}).then((resp) => {
    console.log("Posts:");
    console.log(resp);
});

wp.getCategories().then((resp) => {
    console.log("Categories:");
    console.log(resp);
});
