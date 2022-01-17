import { LayoutProps } from '@/models/index';
import * as React from 'react';
import Link  from 'next/link';
export interface IEmptyLayoutProps {
}

export function EmptyLayout ({children}: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
