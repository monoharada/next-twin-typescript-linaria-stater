import React from 'react';
import { css } from 'linaria';
import tw from 'twin.macro';
import { Button, Text } from '../components';

export default function other() {
  return (
    <div className='App'>
      <h1>Next.js + twin.macro + Linaria</h1>
      <Text>hogehoge</Text>
      <div
        className={css`
          ${tw`mt-[50px] md:bg-gray-500 sm:bg-pink-500 border border-solid border-purple-900 p-6 font-bold`}
        `}
      >
        I am styled with twin.macro + Linaria
        <Button
          type='button'
          isSecondary
          className={css`
            ${tw`ml-11`}
          `}
        >
          hoge
        </Button>
      </div>
    </div>
  );
}
