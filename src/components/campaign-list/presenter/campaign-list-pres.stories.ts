import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { CampaignListPresComponent } from "./campaign-list-pres.component";
import { SharedModule } from "src/components/shared";

const meta: Meta<CampaignListPresComponent> = {
  title: 'Component/CampaignListPresComponent',
  component: CampaignListPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedModule
      ],
      declarations: [
        CampaignListPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: CampaignListPresComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CampaignListPresComponent>;

export const First: Story = {
  args: {
    campaigns: [{
      name: 'Holiday Favorites',
      status: 'running',
      startDate: new Date(),
      endDate: new Date(),
      impression: 7,
      clicks: 1,
      acos: 12
    },
    {
      name: 'Holiday Favorites',
      status: 'running',
      startDate: new Date(),
      endDate: new Date(),
      impression: 8,
      clicks:2,
      acos: 12
    },
    {
      name: 'Holiday Favorites',
      status: 'running',
      startDate: new Date(),
      endDate: new Date(),
      impression: 7,
      clicks: 1,
      acos: 12
    }]
  },
};

