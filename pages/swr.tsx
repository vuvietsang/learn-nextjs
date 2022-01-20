import StudentDetails from '@/components/swr/studentDetails';
import * as React from 'react';



export default function SWRPage () {
  return (
    <div>
      <h1>SWR playground</h1>
      <ul>
          <li><StudentDetails studentId="sktwi1cgkkuif36f3" /></li>
          <li><StudentDetails studentId="sktwi1cgkkuif36f3" /></li>
          <li><StudentDetails studentId="sktwi1cgkkuif36f3" /></li>
      </ul>
    </div>
  );
}
