import React from 'react'
import { useParams } from 'react-router-dom';

function DemoPropsMatch(props) {
    const { id } = useParams();
  return (
    <div>
      code display: {id}
    </div>
  )
}

export default DemoPropsMatch
