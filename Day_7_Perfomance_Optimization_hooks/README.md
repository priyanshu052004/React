React Performance Optimization Hooks
🚀 Today I Learned

Today I learned about performance optimization hooks in React.
These hooks help to make React apps faster and efficient by avoiding unnecessary re-renders.

⭐ 1. React.memo()
Used to prevent unnecessary re-rendering of components
Works when props do not change
Uses shallow comparison

✅ Use case:
When child component gets same props again

⭐ 2. useCallback()
Used to memoize (cache) functions
Prevents function from being recreated on every render

✅ Use case:
When passing function as props to child component

⭐ 3. useMemo()
Used to cache expensive calculations
Recalculates only when dependency changes

✅ Use case:
Heavy calculations (filter, sort, loops)

⭐ 4. useRef()
Stores value without re-render
Used to access DOM elements directly

✅ Use case:
Input focus, storing previous values

🎯 Key Difference
Hook	Purpose
React.memo	Component optimization
useCallback	Function optimization
useMemo	Value optimization
useRef	No re-render storage


💡 Final Understanding
These hooks help to avoid unnecessary re-renders
Improve performance and speed
Used in real-world large applications