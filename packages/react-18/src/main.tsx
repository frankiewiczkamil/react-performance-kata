import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import "./styles.css"

import { ClazzContainer } from './ClazzContainer';
import StateHookExample0 from './StateHookExample0';
import StateHookExample1 from './StateHookExample1';
import StateHookWithUseCallbackAndClosure from './StateHookWithUseCallbackAndClosure';
import StateHookExample2 from './StateHookExample2';
import StateHookExample3 from './StateHookExample3';
import ReducerExample from './ReducerExample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <p>Examples below show some possible solutions for avoiding unnecessery renders in functional components. Class components have methods which can be used for this purpose - no props -{">"} no changes in props -{">"} no unnecessary renders on state change</p>
    <div >
      <ClazzContainer />
      <StateHookExample0 />
      <StateHookExample1 />
      <StateHookWithUseCallbackAndClosure />
      <StateHookExample2 />
      <StateHookExample3 />
      <ReducerExample />
    </div>

  </StrictMode>
);
