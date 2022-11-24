import type { Meta, Story } from '@storybook/react';

import { Separator } from '.';
import { SeparatorProps } from './types';

export default {
  component: Separator,
  title: 'Core/Separator',
  args: {
    showDecoration: true,
    spaceBlockStart: '3rem',
    spaceBlockEnd: '3rem',
  },
} as Meta;

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />;

export const Default = Template.bind({});
