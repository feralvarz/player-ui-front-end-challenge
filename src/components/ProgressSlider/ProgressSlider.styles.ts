import styled from 'styled-components';

export const SliderContainer = styled.form`
  .SliderRoot {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 100%;
    height: 20px;
    &:hover .SliderThumb {
      background-color: white;
    }

    .SliderTrack {
      background-color: ${({ theme }) => theme.color.grayscale700};
      position: relative;
      flex-grow: 1;
      border-radius: 9999px;
      height: 4px;
    }

    .SliderRange {
      position: absolute;
      background-color: ${({ theme }) => theme.color.malibu500};
      border-radius: 9999px;
      height: 100%;
    }

    .SliderThumb {
      display: block;
      width: 10px;
      height: 10px;
      background-color: transparent;
      border-radius: 50%;
      transition: all 50ms linear 100ms;
      &:focus {
        outline: none;
      }
    }
  }
`;
