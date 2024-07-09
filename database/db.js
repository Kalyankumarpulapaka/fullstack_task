const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://kalyankumarpulapaka:Kalyan8985@cluster0.nupa5fa.mongodb.net/password-reset';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
