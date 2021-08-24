import 'twin.macro'
import styledImport from '@twin.macro/styled'
import { css as cssImport } from '@linaria/core'

declare module 'twin.macro' {
  const styled: typeof styledImport
  const css: typeof cssImport
}
