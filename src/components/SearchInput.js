import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ value, onChange }) => {
  return (
    <Input
      value={ value }
      onChange={ onChange }
      placeholder={ 'Enter Search Query' }
    />
  )
}

export default SearchInput;

const Input = styled.input`
  padding: 10px;
  border-radius: 2px;
  font-size: 18px;
  outline: none;
  border: none;
`;

