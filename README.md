# nocontent
Simple request route handler for ignoring all requests of a route to prevent them from going to 404 handler, which pollutes the logs with "404 /route-name" and make genuine 404 routes harder to find.  
Replies all requests to the specified route with a 204 no content HTTP status code.

## Example
```javascript
const express = require("express");
const app = express();
const nocontent = require("nocontent");

// Any API requests that comes in with 'favicon' in its URL string will get ignored and get a 204 back.
app.use(nocontent(express, "favicon"))

app.use("/", (req, res) => res.status(200).end("Ok!"));
app.listen(3000);
```

## LICENSE
MIT LICENSED, do whatever you want with this!