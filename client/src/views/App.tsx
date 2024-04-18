import { useState } from 'react';
import styled from 'styled-components';

import datasetJSON from '@static/dataset.json';
import { Select } from 'ui';
import { Button } from 'ui/Button';

const Page = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .title {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
  }

  .select-box {
    .kit-select-Item {
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
`;

const selectItem = [
  { value: '방문/배달' },
  { value: '방문' },
  { value: '배달' },
  { value: '디저트' },
];

function App() {
  const [category, setCategory] = useState<string>(selectItem[0].value);
  const [food, setFood] = useState<string>('');

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Page className='ff'>
      <h1 className='title fcs'>
        <span>오늘</span>
        <div className='select-box fzp fwr fc'>
          <Select
            items={selectItem}
            onChange={(v) => {
              setCategory(v);
            }}
            defaultValue={selectItem[0].value}
          >
            {category}
          </Select>
        </div>
        <span>뭐먹지?</span>
      </h1>
      <Button
        onClick={() => {
          const index = getRandomInt(0, datasetJSON.length);
          setFood(datasetJSON[index].name);
        }}
      >
        <span className='ff fzp fwm'>아무거나</span>
      </Button>
      <h3>
        {food.length > 0 ? (
          <span>
            <span className='fcp'>{food}</span>&nbsp;어떰?
          </span>
        ) : (
          <span>&nbsp;</span>
        )}
      </h3>
    </Page>
  );
}

export default App;
