import { Request, Response } from 'express';
import { CAMPAIGN_DATA } from './campaign-type-data';



export function getAllCampaignTypes(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload : Object.values(CAMPAIGN_DATA)});
  }, 1500);
}
