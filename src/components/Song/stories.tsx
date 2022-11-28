import { PageLayout } from '$/components/PageLayout';
import { Separator } from '$/components/Separator';
import { SongItem, SongItemProps } from '$/components/Song/Song';
import { Text } from '$/components/Text';
import { Song } from '$/models/Song/Song.types';
import type { Meta, Story } from '@storybook/react';

const songMock: Song = {
  id: 0,
  name: 'James Eaton',
  author: {
    name: 'Heather Evans',
  },
  description:
    'Human amount heart relate challenge capital after. Stage then conference figure believe establish. Eye provide total instead American.',
  audio: {
    id: 0,
    url: 'https://d2s139ebbsksc4.cloudfront.net/Limosine.mp3',
    autoPlay: true,
  },
  genre: 'ITALO_DISCO',
  image:
    'https://images.unsplash.com/photo-1602922960044-d48ce791d3c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
};

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
    <SongItem song={songMock} index={1} />
  </PageLayout>
);

export const Default = Template.bind({});
