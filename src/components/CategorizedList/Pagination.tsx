import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paginations = ({ count, page, handleChange }: any) => {
  return (
    <Pagination
      count={count}
      page={page}
      size="large"
      onChange={handleChange}
      variant="outlined"
      style={{
        listStyle: 'none',
        color: '#66d9ef',
        marginBottom: '100px',
      }}
    />
  );
};

export default Paginations;
