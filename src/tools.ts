import fs from "fs";

export const readJsonFile = (pathAndFileName: string) => {
	const rawText = fs.readFileSync(pathAndFileName, {
		encoding: "utf8",
		flag: "r",
	});
	const quotes = JSON.parse(rawText);
	return quotes;
};
