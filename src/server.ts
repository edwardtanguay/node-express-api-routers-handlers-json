/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { quoteRouter } from "./routers/quoteRouter";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send(`
<html>
	<body>
	<h1>${process.env.APP_TITLE}</h1>
	<ul>
		<li>GET all quotes - <a href="/quotes">/quotes</a></li>
	</ul>
	</body>
</html>
	`);
});

app.use("/quotes", quoteRouter);
