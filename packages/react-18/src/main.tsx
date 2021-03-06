import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ReducerExample from './ReducerExample';

import StateHookExample1 from './StateHookExample1';
import StateHookExample2 from './StateHookExample2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <StateHookExample1 />
    <StateHookExample2 />
    <ReducerExample />
  </StrictMode>
);
