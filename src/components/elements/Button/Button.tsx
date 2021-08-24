// import React from "react";
import { css } from 'linaria'
import tw from 'twin.macro'
// ______________________________________________________
//
export type Props = {
  children: string
}
// ___
const textsample = css`
  ${tw`grid h-16 text-pink-200 bg-indigo-600 place-items-center`}
`
//
export const Button: React.FC<Props> = ({ children }) => {
  return <div className={textsample}>{children}</div>
}
