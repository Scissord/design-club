import * as Product from "../models/product.js"

export const get = async (req, res) => {
	try {
    const { limit, page, search } = req.query;
    console.log(limit, page, search);
    const products = [{ id: 1 }];
    // const products = await Product.get(limit, page, search);


		res.status(200).json(products);
	}	catch (err) {
		console.log("Error in get product controller", err.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
