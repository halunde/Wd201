// const readline = require("readline");

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });

// const args = process.argv;
// const num1 = parseInt(args[2]);
// const num2 = parseInt(args[3]);
// console.log(`The sum is: ${num1 + num2}`);

// console.log('args[0]:', args[0]);
// console.log('args[1]:', args[1]);
// console.log('args[2]:', args[2]);
// console.log('args[3]:', args[3]);

const args = process.argv;
const operation = args[2];
const num1 = parseInt(args[3]);
const num2 = parseInt(args[4]);

if (operation === 'add') {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === 'subtract') {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === 'multiply') {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log('Unknown operation');
}

// // const http = require('http');
// // const fs = require('fs');
// // const url = require('url');
// // const path = require('path');

// // const args = process.argv.slice(2);
// // const port = args[0] || 5000;

// // const server = http.createServer((req, res) => {
// //   const parsedUrl = url.parse(req.url);
// //   const pathname = parsedUrl.pathname;

// //   if (pathname === '/') {
// //     fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
// //       if (err) {
// //         res.writeHead(500, { 'Content-Type': 'text/plain' });
// //         res.write('Error loading home page');
// //         res.end();
// //       } else {
// //         res.writeHead(200, { 'Content-Type': 'text/html' });
// //         res.write(data);
// //         res.end();
// //       }
// //     });
// //   } else if (pathname === '/project') {
// //     fs.readFile(path.join(__dirname, 'project.html'), (err, data) => {
// //       if (err) {
// //         res.writeHead(500, { 'Content-Type': 'text/plain' });
// //         res.write('Error loading project page');
// //         res.end();
// //       } else {
// //         res.writeHead(200, { 'Content-Type': 'text/html' });
// //         res.write(data);
// //         res.end();
// //       }
// //     });
// //   } else if (pathname === '/registration') {
// //     fs.readFile(path.join(__dirname, 'registration.html'), (err, data) => {
// //       if (err) {
// //         res.writeHead(500, { 'Content-Type': 'text/plain' });
// //         res.write('Error loading registration page');
// //         res.end();
// //       } else {
// //         res.writeHead(200, { 'Content-Type': 'text/html' });
// //         res.write(data);
// //         res.end();
// //       }
// //     });
// //   } else {
// //     res.writeHead(404, { 'Content-Type': 'text/plain' });
// //     res.write('Page not found');
// //     res.end();
// //   }
// // });

// // server.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });



// /*
// const fs = require("fs");

// fs.writeFile(
//   "sample.txt",
//   "Hello World. Welcome to Node.js File System module.",
//   (err) => {
//     if (err) throw err;
//     console.log("File created!");
//   }
// );

// fs.appendFile("sample.txt", " This is my updated content", (err) => {
//   if (err) throw err;
//   console.log("File updated!");
// });
// fs.readFile("sample.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.rename("sample.txt", "test.txt", (err) => {
//   if (err) throw err;
//   console.log("File name updated!");
// });

// fs.unlink("test.txt", (err) => {
//   if (err) throw err;
//   console.log("File test.txt deleted successfully!");
// });

// */

// // const http=require("http");
// // const fs=require("fs");

// // const server=http.createServer((req,res) =>
// // {
// //   // fs.readFile("sample.txt" ,(err,data)=>
// //   // {
// //   //   res.end(data);
// //   // })

// //   const stream=fs.createReadStream("sample.txt");
// //   stream.pipe();
  

// // });
// // server.listen(3000);


// const http = require("http");
// const fs = require("fs");

// let homeContent = "";
// let projectContent = "";

// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   homeContent = home;
// });

// fs.readFile("project.html", (err, project) => {
//   if (err) {
//     throw err;
//   }
//   projectContent = project;
// });


// http
//   .createServer((request, response) => {
//     let url = request.url;
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     switch (url) {
//       case "/project":
//         response.write(projectContent);
//         response.end();
//         break;
//       default:
//         response.write(homeContent);
//         response.end();
//         break;
//     }
//   })
//   .listen(3000);

  