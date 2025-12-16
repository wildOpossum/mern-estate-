import bcryptjs from 'bcryptjs';

import User from '../models/user.model.js';

export const singup = async (req, res) => {
	const {username, email, password} = req.body;

	const hashedPassword = await bcryptjs.hash(password, 10);
	const newUser = new User({username, email, password: hashedPassword});
	
	try {
		await newUser.save();
		res.status(200).json('User created succesfully!');
	} catch (error) {
		res.status(500).json(error.errmsg);
	}

}