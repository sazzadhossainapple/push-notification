const express = require("express");
const router = express.Router();

const notificationRoute = require("./notification.route");

const routes = [{ path: "/notification", handler: notificationRoute }];

routes.map((route) => router.use(route?.path, route?.handler));

const configureRoutes = (app) => app.use("/api", router);

module.exports = configureRoutes;
