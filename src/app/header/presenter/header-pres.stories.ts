import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/components/shared";
import { action } from '@storybook/addon-actions';
import { HeaderPresComponent } from "./header-pres.component";
import { AppRoutingModule } from "src/app/app-routing.module";

const meta: Meta<HeaderPresComponent> = {
  title: 'Component/HeaderPresComponent',
  component: HeaderPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedModule,
      ],
      declarations: [
        HeaderPresComponent
      ],
      providers: []
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: HeaderPresComponent) => ({
    props: {
      ...args,
      logOutBtnClicked: actions.logOutBtnClicked
    },
  }),
};

const actions = {
  logOutBtnClicked: action('log out button clicked')
};

export default meta;
type Story = StoryObj<HeaderPresComponent>;

export const First: Story = {
  args: {
    isLoggedInUser: true,
    user: {
      id: 1,
      name: 'user',
      email: 'user@test.com'
    }
  },
};

