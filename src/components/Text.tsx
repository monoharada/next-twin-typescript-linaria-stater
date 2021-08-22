import { css } from 'linaria';
import tw from 'twin.macro';

const textsample = css`
  ${tw`grid text-xl text-green-600 place-items-center`}
`;

const Text = ({ children }: any) => {
  return <p className={textsample}>{children}</p>;
};

export default Text;
