import { CircularProgress } from '@mui/material';
import React from 'react';

export interface LoadingProps {
  showLoading: boolean;
}

const Loading = ({ showLoading }: LoadingProps) => {
  return (
    <>
      {showLoading ? (
        <CircularProgress size={14} color="secondary" sx={{ marginRight: 2 }} />
      ) : null}
    </>
  );
};

export default Loading;
