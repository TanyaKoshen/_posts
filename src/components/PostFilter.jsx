import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <Input
        placeholder='Search...'
        value={filter.query}
        onChange={e=>setFilter({...filter, query: e.target.value})}
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={'sort...'}
        options={[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by content'},
        ]}
      />
    </div>
  );
};

export default PostFilter;
