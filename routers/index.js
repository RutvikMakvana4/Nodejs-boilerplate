// Main route - start with here....

import express from "express";

const routes = express.Router();

routes.use('/admin', require('./admin/index'));
routes.use('/api/v1', require('./apis/index'));


module.exports = routes;