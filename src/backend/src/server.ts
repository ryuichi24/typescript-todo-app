import express, { Express, Request, Response } from 'express';
import { ServerParts, Route } from './typings/common';

class Server {
  private readonly _app: Express;
  private readonly _port: string;
  private readonly _host: string;

  constructor(serverParts: ServerParts) {
    this._app = express();
    this._host = serverParts.host;
    this._port = serverParts.port;
    this.setMiddlewares(serverParts.middlewares);
    this.setRoutes(serverParts.routes);
  }

  public init() {
    // TODO: remove it later
    this._app.get('/', (_: Request, res: Response) =>
      res.status(200).send('API is running'),
    );

    this._app.listen(this._port, () =>
      console.log(`Server is running on ${this._host}:${this._port}`),
    );
  }

  private setMiddlewares(middlewares: Array<any>) {
    middlewares.forEach((middleware) => {
      this._app.use(middleware);
    });
  }

  private setRoutes(routes: Array<any>) {
    routes.forEach((route: Route) => {
      this._app.use(route.baseRoute, route.router);
    });
  }
}

export default Server;
