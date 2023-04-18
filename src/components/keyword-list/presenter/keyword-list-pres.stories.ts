import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { KeywordItemPresModule } from "../subcomponent";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/components/shared";
import { KeywordListPresComponent } from "./keyword-list-pres.component";

const meta: Meta<KeywordListPresComponent> = {
  title: 'Component/KeywordListPresComponent',
  component: KeywordListPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        KeywordItemPresModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [
        KeywordListPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: KeywordListPresComponent) => ({
    props: {
      ...args,
      addKeywordButtonClicked: actions.addKeywordButtonClicked,
      cancelButtonClicked: actions.cancelButtonClicked,
      continueButtonClicked: actions.continueButtonClicked,
      searchInputChanged: actions.searchInputChanged
    },
  }),
};

const actions = {
  addKeywordButtonClicked: action('Action Group Add button clicked'),
  cancelButtonClicked: action('Buttons Group Cancel button clicked'),
  continueButtonClicked: action('Buttons Group Continue button clicked'),
  searchInputChanged: action('Search Input Text changed')
};

export default meta;
type Story = StoryObj<KeywordListPresComponent>;

export const First: Story = {
  args: {
    keywordList: [
      {
        name: 'test',
        bid: 0,
        suggestedBid: 2,
        matchType: 'Exact'
      }
    ]
  },
};

