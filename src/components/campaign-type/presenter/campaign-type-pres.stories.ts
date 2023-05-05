import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { CampaignTypePresComponent } from "./campaign-type-pres.component";
import { SharedModule } from "src/components/shared";
import { action } from '@storybook/addon-actions';

const meta: Meta<CampaignTypePresComponent> = {
  title: 'Component/CampaignTypePresComponent',
  component: CampaignTypePresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedModule
      ],
      declarations: [
        CampaignTypePresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: CampaignTypePresComponent) => ({
    props: {
      ...args,
      continueBtnClicked : actions.continueBtnClicked
    },
  }),
};

const actions = {
  continueBtnClicked: action('one campaign type chosen')
};

export default meta;
type Story = StoryObj<CampaignTypePresComponent>;

export const First: Story = {
  args: {
    campaignTypes: [{
      name: 'Sponsored Products',
      details: 'Promote products to shoppers actively searching with related keywords',
      id:1,
      url: 'http://www.products.com'
    },
    {
      name: 'Sponsored Brands',
      details: 'Help shoppers discover your brand and product',
      id:2,
      url: 'http://www.brand.com'
    },
    {
      name: 'Sponsored Display',
      details: 'Grow your business by reaching relevent audience',
      id:3,
      url: 'http://www.display.com'
    }]
  },
};

