const router = require("express").Router();

//this is a testing route
router.use((req, res, next) => {
    res.status(200).json({
        title: 'This is my console test !!',
        message: 'This is the test you deserve, but not the one you need right now !!'
    });
});

// //   module.exports = addAll
  module.exports =  router;