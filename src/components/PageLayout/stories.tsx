import { Separator } from '$/components/Separator';
import { Text } from '$/components/Text';
import type { Meta, Story } from '@storybook/react';

import { PageLayout } from '.';
import { PageLayoutProps } from './types';

export default {
  component: PageLayout,
  title: 'Layout/PageLayout',
} as Meta;

const Template: Story<PageLayoutProps> = (args) => (
  <PageLayout {...args}>
    <Text tag="h1" variant="title1">
      Good morning!
    </Text>
    <Separator
      spaceBlockStart="3rem"
      spaceBlockEnd="3rem"
      showDecoration={true}
    />
  </PageLayout>
);

export const Default = Template.bind({});
