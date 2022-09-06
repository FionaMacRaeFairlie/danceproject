const express = require('express');
const router = express.Router();
const controller = require('../controllers/guestbookControllers.js');

router.get("/", controller.landing_page);
router.get("/home", controller.landing_page);
router.get('/worksheets', controller.display_worksheets);
router.get('/written', controller.display_written);
router.get('/dances', controller.display_dances);
router.get('/animate', controller.display_animate);
router.get('/code', controller.display_code);
router.get('/video', controller.display_video);
router.get('/diagrams', controller.display_diagrams);
router.get('/about', controller.display_about);
router.get('/pilling', controller.display_pilling);
router.get('/about', controller.display_about);
router.get('/contact', controller.display_contact);
router.get('/skipchange', controller.display_skipchange);
router.get('/pasdebasque', controller.display_pasdebasque);
router.get('/slipstep', controller.display_slipstep);

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;