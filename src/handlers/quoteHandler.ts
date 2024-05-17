import * as tools from "../tools";

export const getAllQuotes = async () => {
	return new Promise((resolve) => {
		const quotes = tools.readJsonFile("src/data/quotes.json");
		resolve(quotes);
	});
};
