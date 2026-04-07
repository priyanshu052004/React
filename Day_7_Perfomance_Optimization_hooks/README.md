React Performance Optimization Hooks

Today I Learned:
Today I learned about performance optimization hooks in React.
These hooks help to make React applications faster and efficient by avoiding unnecessary re-renders.

--------------------------------------------------

1. React.memo()
- Used to prevent unnecessary re-rendering of components
- Works when props do not change
- Uses shallow comparison

Use Case:
When child component receives same props again

--------------------------------------------------

2. useCallback()
- Used to memoize (cache) functions
- Prevents function from being recreated on every render

Use Case:
When passing functions as props to child components

--------------------------------------------------

3. useMemo()
- Used to cache expensive calculations
- Recalculates only when dependency changes

Use Case:
Heavy operations like filtering, sorting, loops

--------------------------------------------------

4. useRef()
- Stores value without causing re-render
- Used to access DOM elements directly

Use Case:
Input focus, storing previous values

--------------------------------------------------

Key Difference:

React.memo   -> Component optimization
useCallback  -> Function optimization
useMemo      -> Value optimization
useRef       -> No re-render storage + DOM access

--------------------------------------------------

Final Understanding:
- These hooks help avoid unnecessary re-renders
- Improve performance and speed
- Useful in real-world applications

--------------------------------------------------

One Line Summary:
React performance can be improved using React.memo, useCallback, useMemo, and useRef to control rendering and optimize computations.