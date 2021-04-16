import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (min-width: 361px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 601px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
};
