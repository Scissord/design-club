import * as Client from "../models/client.js";

export const getAll = async (req, res) => {
	try {
    const clients = await Client.getAll();
		res.status(200).send(clients);
	}	catch (err) {
		console.log("Error in getAll client controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};
