import { css } from "linaria";
import tw, { styled, theme } from 'twin.macro'

interface IButtonProps {
  isPrimary? : boolean
  isSecondary? : boolean
  isSmall? : boolean
}
const Button = styled.button(({ isPrimary, isSecondary, isSmall}:IButtonProps) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 text-lg focus:outline-none`,
  tw`transition-transform duration-75 transform`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-white bg-pink-700)`,

  // Use props to conditionally style your components
  isPrimary && tw`text-white bg-pink-500 border-black`,

  // Combine regular css with tailwind classes within backticks
  isSecondary &&
    tw`bg-green-600 text-white border-black hocus:(scale-105 text-white bg-green-700)`,

  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
])

export default Button