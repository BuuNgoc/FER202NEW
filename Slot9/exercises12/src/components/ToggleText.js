import React, { useState } from 'react';

export default function ToggleText() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Text
      </button>
      {show && <p>This is some toggleable text!</p>}
    </div>
  );
}
