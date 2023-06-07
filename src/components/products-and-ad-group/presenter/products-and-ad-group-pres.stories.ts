import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/components/shared";
import { ProductsAndAdGroupPresComponent } from "./products-and-ad-group-pres.component";
import { ReactiveFormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { ProductsPresModule } from "../subcomponent/products";

const meta: Meta<ProductsAndAdGroupPresComponent> = {
  title: 'Component/ProductsAndAdGroupPresComponent',
  component: ProductsAndAdGroupPresComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        ProductsPresModule,
      ],
      declarations: [
        ProductsAndAdGroupPresComponent
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  render: (args: ProductsAndAdGroupPresComponent) => ({
    props: {
      ...args,
      formSubmit: actions.formSubmit,
      addClick: actions.addClick
    },
  }),
};

const actions = {
  formSubmit: action('form submitted'),
  addClick: action('add button clicked'),
};

export default meta;
type Story = StoryObj<ProductsAndAdGroupPresComponent>;

export const First: Story = {
  args: {
    products:[
      { id: 1, name: 'Product 1', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: false },
    ],
    addedProducts: [
      { id: 2, name: 'Product 2', price: 10, stock: 'In Stock', SKU: 'PM_1010', added: true },
    ]

  },
};

