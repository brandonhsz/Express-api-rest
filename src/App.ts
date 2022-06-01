import express, { Application as ExApplication } from 'express';
import {router} from './routes'

export class Application {
  private static instance: Application
  private app!: ExApplication;

  private constructor() {
    this.config();
  }

  public static getInstance() {
    if(!Application.instance) {
      this.instance = new Application()
    }

    return this.instance
  }

  private config() {
    this.app = express();
    this.app.use(express.json());
    this.registerRouters();
  }

  public listen() {

    const PORT = process.env.PORT || 3000;

    this.app.listen(PORT, () => console.log("Server is running"));
  }

  private registerRouters() {
    this.app.use('/', router)
  }
}


