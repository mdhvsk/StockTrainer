const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

// router.get("/api/users", async (req, res) => {
// 	User.find()
//     .then(allUsers => res.json({ users: allUsers }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// });

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password!" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password!" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Succesfully logged in!" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error!" + error });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;