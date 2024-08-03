import { RD_Theme } from './types';


declare module "styled-components" {
  export interface Theme extends RD_Theme { } // works for @emotion/react
  export interface DefaultTheme extends RD_Theme { } // for styled-components
  export function useTheme(): RD_Theme;
}
