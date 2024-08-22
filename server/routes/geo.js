const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const issApiResp = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await issApiResp.json();

        if (data.message !== "success") {
            return res.status(500).send({message: 'internal server error'});
        }

        res.send(data.iss_position);
    } catch (e) {
        res.status(500).send({message: 'internal server error'});
    }
})

module.exports = router
