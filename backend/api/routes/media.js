const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests to /media'
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling POST requests to /media'
	});
});

router.get('/:mediaId', (req, res, next) => {
	const id = req.params.mediaId;
	if (id === 'special') {
		res.status(200).json({
			message: 'You discovered the special ID',
			id: id
		});
	} else {
		res.status(200).json({
			message: 'you passed an ID',
			id: id
		});
	}
});

router.patch('/:mediaId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated Product'
	});
});

router.delete('/:mediaId', (req, res, next) => {
	res.status(200).json({
		message: 'Deleted Product'
	});
});

module.exports = router;