import styled from 'styled-components';

const PageWrapper = styled.main`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
`;

const StyledBgVideo = styled.video`
    width: 100vw;
    opacity: 0.5;
    position: absolute;
    top: 0;
    z-index: -1;
`;

const ContentWrapper = styled.div`
/* height: 100vh; */
width: 100vw;
background-color:green
`;

export { PageWrapper, StyledBgVideo, ContentWrapper };
