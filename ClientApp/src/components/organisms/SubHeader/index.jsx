import React from 'react'
import SubHeaderDescription from '../../molecules/SubHeaderDescription';
import SubHeaderTitle from '../../molecules/SubHeaderTitle';

export default function SubHeader() {
  return (
    <div className="text-center p-3 bg-indigo-900">
      <SubHeaderTitle />
      <SubHeaderDescription />
    </div>
  )
}
