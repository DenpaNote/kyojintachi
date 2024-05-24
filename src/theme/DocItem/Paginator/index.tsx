import React from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import type PaginatorType from '@theme/DocItem/Paginator';
import type {WrapperProps} from '@docusaurus/types';
import GiscusComment from '@site/src/components/GiscusComment';

type Props = WrapperProps<typeof PaginatorType>;

export default function PaginatorWrapper(props: Props): JSX.Element {
  return (
    <>
      <Paginator {...props} />
      <GiscusComment />
    </>
  );
}
