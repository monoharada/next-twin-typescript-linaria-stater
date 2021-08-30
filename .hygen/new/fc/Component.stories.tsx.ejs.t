---
to: src/stories/<%= component_name %>.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { <%= component_name %> } from "@/<%= category %>/index";
// ______________________________________________________
//
export default {
  title: '<%= category %>/<%= component_name %>',
  component: <%= component_name %>,
  parameters: {
    docs: {
      description: {
        component: 'There are a set of rules to keep in mind:',
      },
    },
  },
  <% if (have_props) { -%>
  argTypes: {
      variants: {
        name: 'variant',
        description: 'variant descripton',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false },
        },
        control: 'boolean',
      },
      children: {
        name: 'children',
        description: 'children description',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'text something here' },
        },
      },
      type: {
        name: 'type',
        description: 'type description',
        control: {
          type: 'select',
          options: ['small', 'medium', 'large'],
        },
        table: {
          type: { summary: 'select' },
          defaultValue: { summary: 'medium' },
        },
      },
    },
  <% } -%>
} as ComponentMeta<typeof <%= component_name %>>
const Template: ComponentStory<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />

export const Default = Template.bind({})
Default.args =
  <% if (have_props) { -%>
  children: 'text something here',
  <% } -%>
}
