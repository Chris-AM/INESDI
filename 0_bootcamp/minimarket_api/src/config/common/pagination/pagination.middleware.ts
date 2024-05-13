import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: PaginationRequest, res: Response, next: () => void) {
    const { limit = 3, page = 1 } = req.query;
    req.pagination = { limit, page };
    next();
  }
}

interface PaginationRequest extends Request {
  pagination: {
    page: any;
    limit: any;
  };
}
