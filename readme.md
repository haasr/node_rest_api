## node_rest_api
A simple REST API that demonstrates basic CRUD operations on a SQLite3 database.

## Requirements
node v10.19.0+
npm 6.14.4+

## About
I learned to create a simple REST API using express from Coding with Chaim (https://www.youtube.com/watch?v=cr3pX6fSUpc).
I quickly learned that using express as my server package was problematic because while I was able to parse JSON bodies
using body-parser on Linux, the JSON could not be parsed on my Windows machine (using the same Node.js version). I have
essentially recreated Chaim's project using the fastify package instead of express. fastify is actively maintained and
seems much more equipped for making APIs as it is essentially a web framework.

## Setup

### 1) Clone the repo.

### 2) Install the dependencies
    cd node_rest_api
    npm install

### 3) Run the server
    node ./server.js

### 4) Learn how to use it
    See my (unprofessional but functional) walkthrough: https://youtu.be/ykDoXPCilxQ?t=1223
