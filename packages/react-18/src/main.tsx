import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';

import { ClazzContainer } from './ClazzContainer';
import StateHookProblem from './StateHookProblem';
import StateHookWithExternalWrappersAndStaticReferences from './StateHookWithExternalWrappersAndStaticReferences';
import StateHookWithUseCallbackAndStateFromUseRef from './StateHookWithUseCallbackAndStateFromUseRef';
import StateHookWithUseCallbackAndClosure from './StateHookWithUseCallbackAndClosure';
import StateHookWithExternalWrappersAndStaticReferencesWithoutProps from './StateHookWithExternalWrappersAndStaticReferencesWithoutProps';
import StateHookWithGenericSolutionBasedOnUseCallbackAndUseRef from './StateHookWithGenericSolutionBasedOnUseCallbackAndUseRef';
import ReducerAndUseCallback from './ReducerAndUseCallback';
import StateHookUsingFunctionArgAndUseCallback from './StateHookUsingFunctionArgAndUseCallback';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <p>
      Examples below show some possible solutions for avoiding unnecessery
      renders in functional components. Class components have methods which can
      be used for this purpose - no props -{'>'} no changes in props -{'>'} no
      unnecessary renders on state change
    </p>
    <div>
      <StateHookProblem />
      <ClazzContainer />
      <StateHookWithExternalWrappersAndStaticReferences />
      <StateHookWithExternalWrappersAndStaticReferencesWithoutProps />

      <StateHookWithUseCallbackAndClosure />
      <StateHookWithUseCallbackAndStateFromUseRef />
      <StateHookWithGenericSolutionBasedOnUseCallbackAndUseRef />

      <StateHookUsingFunctionArgAndUseCallback />
      <ReducerAndUseCallback />
    </div>
  </StrictMode>
);
