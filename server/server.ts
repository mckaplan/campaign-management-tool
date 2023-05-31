import * as express from 'express';
import {Application} from "express";
import { getAllCampaignTypes } from './campaign-type.route';
import { getAllKeywords } from './keyword-route';
import { getAllCampaigns } from './campaign-details.route';
import { getProducts } from './add-group-product-route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({origin: true}));

app.route('/api/campaign-type').get(getAllCampaignTypes);
app.route('/api/campaigns').get(getAllCampaigns);
app.route('/api/keywords').get(getAllKeywords);
app.route('/api/ad-group-product').get(getProducts);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + 9000);
});
