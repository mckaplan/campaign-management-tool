import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { ActionGroupPresComponent } from "./action-group-pres.component";
import { SharedMaterialModule } from "../sharedMaterial.module";

const meta: Meta<ActionGroupPresComponent> = {
  title: 'Shared/ActionGroupPresComponent',
  component: ActionGroupPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedMaterialModule
      ],
      declarations: [
        ActionGroupPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: ActionGroupPresComponent) => ({
    props: {
      ...args,
      addButton: actions.addButton,
      searchInput: actions.searchInput,
    },
  }),
};
const actions = {
  addButton: action('Add button clicked'),
  searchInput: action('Search input text changed')
};

export default meta;
type Story = StoryObj<ActionGroupPresComponent>;

export const First: Story = {
  args: {
    buttonText: 'Action Button'
  }
};

