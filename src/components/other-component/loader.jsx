import { CircularProgress, Backdrop } from '@mui/material';
import React from 'react';

const Loader = ({ loading }) => {
  return (
    <Backdrop open={loading} style={{ zIndex: 9999, color: '#fff' }}>
      <CircularProgress color='grey' size={40} />
    </Backdrop>
  );
};

export default Loader;
