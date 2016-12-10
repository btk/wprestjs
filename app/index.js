import WPRestAPI from "./wprestjs";

let wp = new WPRestAPI();

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
