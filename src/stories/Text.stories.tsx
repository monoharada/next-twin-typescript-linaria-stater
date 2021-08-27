import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '@/elements/index'

export default {
  title: 'elements/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'There are a set of rules to keep in mind: \n kookni',
      },
    },
  },
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
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />
export const Primary = Template.bind({})
Primary.args = {
  children: 'text something here',
}
