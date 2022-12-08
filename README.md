This project is a playground for exercising effective react. Currently examples cover only possible solutions for avoiding unnecessery renders in functional components. 
Background: class components have methods which can be used for this purpose instead, because no props means no changes in props -> no unnecessary renders on state change. Function components on the other hand have no such feature built-in, so here are some examples of mimicing this feature using various techniques.

run

```bash
npx nx serve react-18
```

observe the logs - child component redner happens only when state value changes - increasing function does not affect it