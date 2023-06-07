import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/components/shared";
import { CampaignDetailPresComponent } from "./campaign-detail-pres.component";

const meta: Meta<CampaignDetailPresComponent> = {
  title: 'Component/CampaignDetailPresComponent',
  component: CampaignDetailPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedModule
      ],
      declarations: [
        CampaignDetailPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: CampaignDetailPresComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CampaignDetailPresComponent>;

export const First: Story = {
  args: {
  },
};

