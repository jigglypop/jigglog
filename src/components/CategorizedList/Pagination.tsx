import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import * as S from './styled';

const Paginations = ({ count, page, handleChange }: any) => {
  return (
    <S.Pagination>
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
    </S.Pagination>
  );
};

export default Paginations;
