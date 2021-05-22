export const up = (breakpoint, vertical = false) =>
  `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 0.02px))`
export const down = (breakpoint, vertical = false) =>
  `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`
export const between = (breakpointMin, breakpointMax, vertical = false) =>
  `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
    vertical ? 'height' : 'width'
  }: calc(${breakpointMin} + 0.02px))`
