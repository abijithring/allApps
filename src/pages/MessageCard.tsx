import React from 'react';
import '../Components/styles/MessageCard.css'; // Ensure this file exists in the same folder

export default function MessageCard() {
  return (
    <div className='card'>
        <h3>Nature Farming</h3>
        <p> Adress:
          <br />
          1234 Main St, Anytown, USA
          <br />
          pin code: 600100,
          <br />
        </p>
    </div>
  )
}
