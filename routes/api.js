const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const ticketController = require('../controllers/ticket-controller');
const attachmentController = require('../controllers/attachment-controller');
const remarkController = require('../controllers/remark-controller');
const ticketattchmentController = require('../controllers/ticketattachment-controller');
const ticketremarkController = require('../controllers/ticketremark-controller');

router.post('/adduser',userController.adduser);
router.get('/getuser',userController.getuser);
router.put('/updateuser',userController.updateuser);
router.delete('/deleteuser',userController.deleteuser);

router.post('/addticket',ticketController.addticket);
router.get('/getticket',ticketController.getticket);
router.put('/updateticket',ticketController.updateticket);
router.delete('/deleteticket',ticketController.deleteticket);

router.post('/addattachment',attachmentController.addattachment);
router.get('/getattachment',attachmentController.getattachment);
router.put('/updateattachment',attachmentController.updateattachment);
router.delete('/deleteattachment',attachmentController.deleteattachment);

router.post('/addremark',remarkController.addremark);
router.get('/getremark',remarkController.getremark);
router.put('/updateremark',remarkController.updateremark);
router.delete('/deleteremark',remarkController.deleteremark);

router.post('/addticketattachment',ticketattchmentController.addremark);
router.get('/getticketattachment',ticketattchmentController.getticketattachment);
router.put('/updateticketattachment',ticketattchmentController.updateticketattachment);
router.delete('/deleteticketattachment',ticketattchmentController.deleteticketattachment);

router.post('/addticketremark',ticketremarkController.addticketremark);
router.get('/getticketremark',ticketremarkController.getticketremark);
router.put('/updateticketremark',ticketremarkController.updateticketremark);
router.delete('/deleteticketremark',ticketremarkController.deleteticketremark);