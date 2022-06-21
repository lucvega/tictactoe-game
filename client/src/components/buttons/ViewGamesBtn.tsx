import ListAltIcon from '@mui/icons-material/ListAlt';
import { Box, Button, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const ViewGamesBtn = () => {
  return (
    <Box textAlign='center'>
      <Tooltip title='View Saved Games' arrow>
        <Link
          to='/savedGames'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Button variant='outlined' size='large'>
            <ListAltIcon />
          </Button>
        </Link>
      </Tooltip>
    </Box>
  );
};

export default ViewGamesBtn;
