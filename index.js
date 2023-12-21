/* setting and creating the basic sever as follows  */
// const http = require("http");/* here we need to import http to create the server by using require keyword. */
// const server = http.createServer((req, res) => {  /* here we are creating the basic server and sending response to the client back here we are getting req and response instead of req and res we can also write require and response.as well */
//   res.end("hello from the server i am the basic server"); /* here we are wrting res.end to end the request and sending response back. */
// });
// const port = 3004;/* setting the port here we can have anyport number of our choice. */
// server.listen(port, () => { /* here we can understand where our server curently processing as well.  */
//   console.log(`server listening to port ${port}`);
// });

/* setting up the sever and sending the response back */
// const http = require("http");  /* first we are going to import the server by using require from the module of http. */
// const server = http.createServer((req, res) => { /* creating the sever and sending response back. */
//   res.writeHead(200, "Content-Type", "text/html"); /* here we are using res.writeHead to say the server what type of data and sucess code back to the server. */
//   res.write(`<html>  /* here writing the html into the server by using res.write.  make sure that we are following camel case here. */
//     <head>
//     <tittle>home page</tittle></head>
//     <body>
//     <p><h1>hello from home page.</h1></p>
//     </body>
//     </html>`);
//   res.end("hello i am ending the request.now"); /* ending the request by sendind data. */
// });
// const port = 5006;  /* setting a port number to run our server */
// server.listen(port, () => {
//   console.log(`the server is running at port ${port}`); /* it says where our server is currently running. */
// });

/* setting up the sever and performing the routing on the server */

// const http = require("http"); /* importing the server */
// const server = http.createServer((req, res) => { /* setting up the server */
//   if (req.url == "/") {  /* when the url is / then it will show hpme page */
//     res.end("hello from home page");
//   } else if (req.url == "/contact") { /* when the url is /contact it will show conatct page */
//     res.end("hello from contact page");
//   } else if (req.url == "/about") { /* when the url is /about it will show about page. */
//     res.end("hello from about page.");
//   } else { /* if it doesnt find any valid url then it will show page not found error. */
//     res.writeHead(200, "content-type:text/html");
//     res.end("404 page not found error.");
//   }
// });

// const port = 2003; /* setting up the port */
// server.listen(port, () => {
//   console.log(`server is listening to the port ${port}`); /* to see where our server currently running as well. */
// });

/* setting the server and sending html doc as response by using different urls. */

// const http = require("http"); /* importing the server */
// const server = http.createServer((req, res) => {
//   /* setting up the server */
//   if (req.url == "/") {
//     /* when the url is / then it will show hpme page */
//     res.writeHead(200, "content-type:text/html");
//     res.write(`<html>
//       <head>
//       <tittle>HOME PAGE</tittle></head>
//       <body>
//       <p><h1>Hello From Home Page.</h1></p>
//       </body>
//       </html>`);
//     res.end();
//   } else if (req.url == "/contact") {
//     /* when the url is /contact it will show conatct page */

//     res.writeHead(200, "content-type:text/html");
//     res.write(`<html>
//   <head>
//   <tittle>CONTACT PAGE</tittle></head>
//   <body>
//   <p><h1>Hello From Contact Page.</h1></p>
//   </body>
//   </html>`);
//     res.end();
//   } else if (req.url == "/about") {
//     /* when the url is /about it will show about page. */

//     res.writeHead(200, "content-type:text/html");
//     res.write(`<html>
//   <head>
//   <tittle>ABOUT PAGE</tittle></head>
//   <body>
//   <p><h1>Hello From About Page.</h1></p>
//   </body>
//   </html>`);
//     res.end();
//   } else {
//     /* if it doesnt find any valid url then it will show page not found error. */
//     res.writeHead(200, "content-type:text/html");
//     res.end("404 page not found error.");
//   }
// });

// const port = 2004; /* setting up the port */
// server.listen(port, () => {
//   console.log(
//     `server is listening to the port ${port}`
//   ); /* to see where our server currently running as well. */
// });

/* setting the sever and sending data back to the server by using GET and url in the format of JSON. */

// const http = require("http"); /* importing the server */
// const server = http.createServer((req, res) => {
//   /* creating the server and handling the requests */
//   const user = [{ name: "MERN DEVLOPPER", age: 35, country: "USA" }];
//   if (req.method === "GET" && req.url === "/users") {
//     res.writeHead(
//       200,
//       "content-type:Application/JSON"
//     ); /* here we are saying that we are sending back data in Json format. */
//     return res.end(
//       JSON.stringify(user)
//     ); /* here we already know JSON.stringify() method to convert an array objects into JSON format */
//   }
// });
// const port = 8000;
// server.listen(port, () => {
//   console.log(
//     `server is listening to the port ${port}`
//   ); /* to see where our server is currently running. */
// });
