import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { SharedMaterialModule } from "../sharedMaterial.module";
import { ButtonsGroupPresComponent } from "./buttons-group-pres.component";

const meta: Meta<ButtonsGroupPresComponent> = {
  title: 'Shared/ButtonsGroupPresComponent',
  component: ButtonsGroupPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedMaterialModule
      ],
      declarations: [
        ButtonsGroupPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: ButtonsGroupPresComponent) => ({
    props: {
      ...args,
      cancelButton: actions.cancelButton,
      continueButton: actions.continueButton
    },
  }),
};

const actions = {
  cancelButton: action('Cancel button clicked'),
  continueButton: action('Continue button clicked')
};

export default meta;
type Story = StoryObj<ButtonsGroupPresComponent>;

export const First: Story = {
};

