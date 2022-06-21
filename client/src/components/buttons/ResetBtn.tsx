import { Box, Button, Tooltip } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React from 'react';

type ResetProps = {
  onClick: () => void;
};

const ResetBtn = ({ onClick }: ResetProps) => {
  return (
    <Box textAlign='center'>
      <Tooltip title='Reset Game' arrow>
        <Button variant='contained' size='large' onClick={onClick}>
          <RestartAltIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default ResetBtn;
