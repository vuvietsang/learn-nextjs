import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailsProps {
    studentId:any
}

export default function StudentDetails ({studentId}: StudentDetailsProps) {
    const {data} = useSWR(`/students/${studentId}`,{revalidateOnFocus:false});
  return (
    <div>
      Name:{data?.name || '--'}
    </div>
  );
}
