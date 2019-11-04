'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(PORT) {
  let state = 10;
  const urlPath={
    state:'/state',
    reset:'/reset',
    add:'/add',
    subtract:'/subtract'

  }

  const server = http.createServer((request, response) => {

    if (request.url== urlPath.add){
      state++;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ state: state }));
    }if (request.url== urlPath.subtract){
      state--;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ state: state }));
    }if (request.url== urlPath.reset){
      state=10;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ state: state }));
    }if (request.url== urlPath.state){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ state: state }));
    }
    else{
       response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('  <strong>my friend, </strong><h1>try to type right URl.</h1>');
    }
    
    // TODO: Write your homework code here
   
    
  });
  return server;
}

module.exports = {
  createServer
};