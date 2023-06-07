import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { action } from '@storybook/addon-actions';
import { SharedModule } from '../../../shared/index';
import { ProductsPresComponent } from "./products-pres.component";

const meta: Meta<ProductsPresComponent> = {
  title: 'Component/ProductsPresComponent',
  component: ProductsPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SharedModule,
      ],
      declarations: [
        ProductsPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: ProductsPresComponent) => ({
    props: {
      ...args,
      addClick: actions.addClick
    },
  }),
};

const actions = {
  addClick: action('add button clicked'),
};

export default meta;
type Story = StoryObj<ProductsPresComponent>;

export const First: Story = {
  args: {
    products:[
      { id: 1, name: 'Product 1', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
      { id: 2, name: 'Product 2', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
    ],
    title :'Products header'
  },
};

