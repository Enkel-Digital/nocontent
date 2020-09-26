/**
 * Route handler to ignore all requests of a route, while preventing it from going to 404, which pollutes the logs with "404 /route-name"
 * @param express
 * @param regExp A string or regexp passed to new RegExp(regExp) as the route/path to return 204 for.
 * @returns Returns the router for you to mount on your app.
 */
module.exports = function factoryFunction(express, regExp) {
  const router = express.Router();
  router.get(new RegExp(regExp), (_, res) => res.status(204).end());
  return router;
};
