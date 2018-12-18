import styled from 'react-emotion';

import { Button as BsButton } from 'antd';

export const Title = styled('h1')`
  line-height: 1.3;
  color: ${p => (p.theme.ui.colors.darkGrey)};
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  font-size: 2.5rem;
`;

export const Lead = styled('p')`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

export const Button = styled(BsButton)`
  height: auto;
  padding: .6em 3.5em;
  text-transform: uppercase;
  letter-spacing: .5px;
  line-height: 2;
  font-size: .75rem;
`;

export const Muted = styled('div')`
  margin-top: .5rem;
  font-size: .75rem;
  opacity: .7;
  font-style: italic;
`;

export const Wrapper = styled('section')`
  position: relative;
  padding: 5.375rem 0 5.6875rem;
  ${Title} {
    margin-bottom: 1.625rem;
  }
  ${Lead} {
    letter-spacing: .3px;
    opacity: .9;
  }
  text-align: center;
`;
