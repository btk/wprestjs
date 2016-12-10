# wprestjs
[WIP] Javascript client/boilerplate for wordpress 4.7+ rest api

## development

Install npm dependencies and start webpack dev-server;

~~~~
npm install
npm run start

#just to build
npm run build
~~~~

This project also can be used as a wordpress rest api boilerplate. But if you only want to use the current version of the WPRestAPI javascript class you can do so by including it in your project via npm;

~~~~
npm install wprestjs --save-dev
~~~~

In your js file with es6;
~~~~
import wp from "wprestjs";

wp.getPosts({number:2})
  .then((resp) =>
  {
  console.log(resp);
  });
  
~~~~

The class is in WIP, you can contribute it by pull requests in this repository.
