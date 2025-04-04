import React, { useEffect } from 'react';
import AccessProvider from '../components/common/accessProvider';
import ToolBar from '../components/common/toolBar';

const App = ({ children }) => {
  return (
    <AccessProvider>
      <ToolBar />
      {children}
    </AccessProvider>
  );
};

export default App;
