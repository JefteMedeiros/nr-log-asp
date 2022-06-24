import React from 'react'
import SubHeaderDescription from '../../atoms/SubHeaderDescription';
import SubHeaderTitle from '../../atoms/SubHeaderTitle';

export default function SubHeader() {
  return (
    <div className="text-center p-3 bg-indigo-900">
      <SubHeaderTitle />
      <SubHeaderDescription />
    </div>
  )
}
