import { Request, Response } from 'express';
import { CAMPAIGNS_DATA } from './campaign-details-data';



export function getAllCampaigns(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload : Object.values(CAMPAIGNS_DATA)});
  }, 1500);
}
