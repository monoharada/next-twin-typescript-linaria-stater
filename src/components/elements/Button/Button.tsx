// import React from "react";
import { css } from 'linaria';
import tw from 'twin.macro';
// ______________________________________________________
//
export type Props = {
  children: string;
};
// ___
const textsample = css`
  ${tw`h-16 text-pink-600 bg-indigo-400`}
`;
//
export const Button: React.FC<Props> = ({ children }) => {
  return <div className={textsample}>{children}</div>;
};
