
import * as moment from "moment";
var d = new Date();

export const CAMPAIGNS_DATA: any = {
  1: {
    campaignName: 'Holiday Favorites1',
    dailyBudget: 1,
    startDate:  (moment(d)).format('DD-MM-YYYY'),
    endDate: (moment(d.getFullYear() + 2)).format('DD-MM-YYYY')
  },
  2: {
    campaignName: 'Holiday Favorites2',
    dailyBudget: 2,
    startDate:  (moment(d)).format('DD-MM-YYYY'),
    endDate: (moment(d.getFullYear() + 2)).format('DD-MM-YYYY')
  },
  3: {
    campaignName: 'Holiday Favorites2',
    dailyBudget: 3,
    startDate:  (moment(d)).format('DD-MM-YYYY'),
    endDate: (moment(d.getFullYear() + 2)).format('DD-MM-YYYY')
  }
};
