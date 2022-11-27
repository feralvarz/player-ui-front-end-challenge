import { SideMenu as DefaultSideMenu } from '$/components/SideMenu';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const SideMenu = styled(DefaultSideMenu)`
  flex-shrink: 0;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 2.5rem;
  overflow: hidden;
  max-height: 100%;

  ${from['laptop']} {
    padding-inline: 6rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;
