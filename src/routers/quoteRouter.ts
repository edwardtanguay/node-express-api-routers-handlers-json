import express, { Router } from "express";
import * as quoteHandler from "../handlers/quoteHandler";

export const quoteRouter = Router();

quoteRouter.get("/", async (_req, res: express.Response) => {
	const quotes = await quoteHandler.getAllQuotes();
	res.json(quotes);
});
