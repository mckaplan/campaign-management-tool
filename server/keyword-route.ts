import { Request, Response } from 'express';
import { KEYWORD_DATA } from './keyword-data';



export function getAllKeywords(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload : Object.values(KEYWORD_DATA)});
  }, 1500);
}
