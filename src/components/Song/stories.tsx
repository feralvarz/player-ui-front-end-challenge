import { PageLayout } from '$/components/PageLayout';
import { Separator } from '$/components/Separator';
import { SongItem, SongItemProps } from '$/components/Song/Song';
import { Text } from '$/components/Text';
import { songsMock } from '$/models/Song/Song.mocks';
import { Song } from '$/models/Song/Song.types';
import type { Meta, Story } from '@storybook/react';

export default {
  component: SongItem,
  title: 'Components/SongItem',
} as Meta;

const Template: Story<SongItemProps> = (args) => (
  <PageLayout {...args}>
    <Text tag="h1" variant="title1">
      Good morning!
    </Text>
    <Separator px spaceBlockStart="40" />
    <SongItem song={songsMock[0] as Song} index={1} />
  </PageLayout>
);

export const Default = Template.bind({});
