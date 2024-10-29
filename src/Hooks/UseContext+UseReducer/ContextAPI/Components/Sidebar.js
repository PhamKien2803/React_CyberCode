import React, { useContext } from 'react';
import UserInformation from './UserInformation';
import { Appcontext } from '../Context/AppContext';

export default function Sidebar() {
  const {useData, isOpen, themeStyle} = useContext(Appcontext)
  if(!isOpen) return null;
  return (
    <div
      className='sidebar'
      style={{
        backgroundColor: 'rgb(228, 228, 228)',
        padding: 10,
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
        ...themeStyle
      }}
    >
      <h2>Sidebar</h2>
      <UserInformation useData={useData} />
    </div>
  );
}
