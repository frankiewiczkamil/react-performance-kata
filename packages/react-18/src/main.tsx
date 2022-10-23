import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import "./styles.css"

import StateHookExample3 from './StateHookExample3';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/*<StateHookExample1/>*/}
    {/*<StateHookExample2/>*/}
    <StateHookExample3/>
    {/*<ReducerExample />*/}

  </StrictMode>
);
