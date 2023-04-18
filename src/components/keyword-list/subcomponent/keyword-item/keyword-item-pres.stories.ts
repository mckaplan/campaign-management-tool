import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/components/shared";
import { KeywordItemPresComponent } from "./keyword-item-pres.component";

const meta: Meta<KeywordItemPresComponent> = {
  title: 'Component/KeywordItemPresComponent',
  component: KeywordItemPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [
        KeywordItemPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: KeywordItemPresComponent) => ({
    props: {
      ...args,
      removeKeyword: actions.removeKeyword,
      setSuggestedBid: actions.setSuggestedBid
    },
  }),
};

const actions = {
  removeKeyword: action('Remove button clicked'),
  setSuggestedBid: action('Suggested Bid link clicked'),
};

export default meta;
type Story = StoryObj<KeywordItemPresComponent>;

export const First: Story = {
  args: {
    keywordsList: [
      {
        name: 'test',
        bid: 0,
        suggestedBid: 2,
        matchType: 'Exact'
      },
      {
        name: 'test1',
        bid: 0,
        suggestedBid: 2,
        matchType: 'Exact'
      },
      {
        name: 'test2',
        bid: 0,
        suggestedBid: 2,
        matchType: 'Exact'
      }
    ]
  },
};

