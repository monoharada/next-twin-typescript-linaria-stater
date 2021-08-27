import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '@/elements/index'

export default {
  title: 'elements/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'There are a set of rules to keep in mind:',
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />
export const Primary = Template.bind({})
