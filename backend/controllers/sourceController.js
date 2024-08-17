import * as Source from "../models/source.js";

export const getAll = async (req, res) => {
	try {
    const sources = await Source.getAll();
		res.status(200).send(sources);
	}	catch (err) {
		console.log("Error in getAll source controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};
