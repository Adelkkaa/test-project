import React, { useState, ChangeEvent } from 'react';
import { useDebounceCallback } from '@/shared/utils/hooks/useDebounceCallback';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value: initialValue,
  onChange,
  placeholder = '',
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  useDebounceCallback(inputValue, 1000, (value) => {
    onChange(value);
  });
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
};
