const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config()

if (process.env.RUN_ENV =="production"){    
    require('dotenv').config({ path: 'config/.env' })
}

if (process.env.RUN_ENV =="development"){    
    require('dotenv').config({ path: 'config/.env_local' })
}

console.log(process.env.API_URL)

app.use(cors());
const documents = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, "./data/json/documents.json"), "utf-8")
);

app.get("/api/v1/documents", (_, res) => {
	return res.json(documents);
});

app.get("/api/v1/documents/:id", (req, res) => {
	return res.json(documents.find((user) => user.id == req.params.id));
});

app.listen(process.env.PORT || 3500, () => {
	console.log("Server started");
});
