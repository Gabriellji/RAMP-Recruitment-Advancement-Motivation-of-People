import styled from 'styled-components';
import theme from './styles/theme';

const PageWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 5rem;
`;

const StyledBgVideo = styled.video`
  width: 100vw;
  opacity: 0.5;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const MainWrapper = styled.main`
  height: 100%;
  display: flex;
  gap: ${theme.spacer.quad};
`;

const ContentWrapper = styled.aside`
  background-color: ${theme.colors.light};
  height: 100%;
  width: 40vw;
  border: ${theme.spacer.two} solid ${theme.colors.purple};
  border-radius: ${theme.spacer.double};
  padding: ${theme.spacer.double};
  box-shadow: 11px 11px 10px 0px rgba(100, 100, 100, 0.8);
`;

export {
  PageWrapper, StyledBgVideo, MainWrapper, ContentWrapper,
};
