const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY,
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    }
  
    const response = await fetch(`${process.env.TRACKER_API_URL}/store`, {
      headers
    });

    const data = await response.json();

    // if (data.errors && data.errors.length > 0) {
    //   return res.status(404).json({
    //     message: 'Store Not Found'
    //   });
    // }
    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router;