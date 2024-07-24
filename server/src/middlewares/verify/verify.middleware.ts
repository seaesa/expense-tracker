import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class VerifyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(process.env.HOST)
    next()
  }
}