import { Html } from '@react-three/drei';
import { useState } from 'react';

export default function Helper() {
  const [overlay, setOverlay] = useState(false);

  return (
    <Html position={[-1.7, 2, -1]}>
        {!overlay ? (
      <div 
      style={{
                paddingLeft: '5px',
                paddingTop: '5px',
                paddingBottom: '5px',
                fontSize: '20px',
                marginTop: '10px',
                color: '#000000,',
                backgroundColor: '#469288',
                width: '20vw',
                borderRadius: '10px',
                border: '2px solid #0D2527',
                userSelect: 'none',
            }}
        >
        Click on the screen to type in the terminal.
        <br />
        Click on the desktop to zoom in.
        
            <button 
            onClick={() => setOverlay(!overlay)}
            style={{ 
                position: 'absolute',
                top: '17%',
                right: '.5%',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#000000',
                backgroundColor: 'transparent',
                border: 'none',
            }}
            >
                x
            </button>
        
      </div> ) : (null)}
    </Html>
  );
}