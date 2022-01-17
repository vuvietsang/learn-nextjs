import { LayoutProps } from '@/models/index';
import * as React from 'react';
import Link  from 'next/link';
export interface IMainLayoutProps {
}

export function MainLayout ({children}: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/" ><a>Home</a></Link>
      <Link href="/about" ><a>About</a></Link>
      <div>{children}</div>
    </div>
  );
}
