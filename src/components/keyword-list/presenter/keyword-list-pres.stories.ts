import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
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
      productKeywordsChanged: actions.keywordListChanged,
      removeKeyword: actions.removeKeyword,
      setSuggestedBid: actions.setSuggestedBid
    },
  }),
};

const actions = {
  keywordListChanged: action('Keyword List changed'),
  removeKeyword: action('Remove button clicked'),
  setSuggestedBid: action('Suggested Bid link clicked'),
};

export default meta;
type Story = StoryObj<KeywordListPresComponent>;

export const First: Story = {
  args: {
    productKeywords: [
      {
        name: 'test',
        bid: 0,
        suggestedBid: 2,
        matchType: 'Exact',
        isActive: true
      }
    ]
  },
};

