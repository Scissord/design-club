import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookie.jwt;
		if(!token) return res.status(401).send({ error: "Unauthorized - No Token Provided" });

		const decoded = jwt.verify(token, process.env.JWT_SECRET); 
		if(!decoded) return res.status(401).send({ error: "Unauthorized - Invalid Token" });

		const user = await User.findById(decoded.userId).select("-password");
		if(!user) return res.status(401).send({ error: "User not found" });

		req.user = user;

		next();
	}	catch (err) {
		console.log("Error in protectRoute controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};

export default protectRoute;
