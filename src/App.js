import React from 'react';
import { VRCanvas, Hands, DefaultXRControllers } from '@react-three/xr';

// Oculus Browser with #webxr-hands flag enabled
function App() {
  return (
    <VRCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <DefaultXRControllers />
      <Hands />
    </VRCanvas>
  )
}

export default App;
