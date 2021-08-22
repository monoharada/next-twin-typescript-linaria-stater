import { css } from 'linaria';
import tw from 'twin.macro';
import { Button } from '@/elements/index';

const Index: React.FC = () => {
  return (
    <div className='App'>
      <h1>Next.js + twin.macro + Linaria</h1>
      <div
        className={css`
          ${tw`mt-[50px] md:bg-gray-500 sm:bg-pink-500 border border-solid border-purple-900 p-6 font-bold`}
        `}
      >
        I am styled with twin.macro + Linaria
        <Button>hoge</Button>
      </div>
    </div>
  );
};
export default Index;
