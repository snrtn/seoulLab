import { styled, AppBar, Toolbar } from '@mui/material';

export const SSection = styled('section')`
  flex-grow: 1;
`;

export const SToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  /* Glassmorphism */
  background: rgba( 255, 255, 255, 0.2 );
  backdrop-filter: blur( 9px );
  -webkit-backdrop-filter: blur( 9px );
`;

export const SAppbar = styled(AppBar)`
  position: fixed;
  background: transparent;
`;

export const SArticle = styled('article')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74.44vw; // 1250px
  height: 6.714vh; // 65px
  background: transparent;
`;