import { Text } from '$/components/Text';
import { FC } from 'react';

import { AlbumCover, TrackContainer } from './TrackThumbnail.styles';

type TrackThumbnailProps = {
  trackName: string;
  artist: string;
  image: string;
};

export const TrackThumbnail: FC<TrackThumbnailProps> = ({
  trackName,
  artist,
  image,
}) => (
  <TrackContainer>
    <AlbumCover url={image} />
    <div>
      <Text tag="h5" variant="body2">
        {trackName || 'Track'}
      </Text>
      <Text tag="p" variant="caption">
        {artist || 'Artist'}
      </Text>
    </div>
  </TrackContainer>
);
