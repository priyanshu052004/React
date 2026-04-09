Custom Hooks


React Custom Hooks - Notes

Today I Learned:
Today I learned about Custom Hooks in React.
Custom hooks help to reuse logic across multiple components and make code clean and maintainable.

--------------------------------------------------

What is Custom Hook?

A custom hook is a normal JavaScript function that uses React hooks (like useState, useEffect) and allows us to reuse logic.

Rule:
- Name must start with "use"
- Can use other hooks inside

--------------------------------------------------

Why use Custom Hooks?

- Reuse logic
- Avoid code duplication
- Make code clean and readable
- Easy to maintain

--------------------------------------------------

Basic Example (useCounter Hook)

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}

--------------------------------------------------

Usage in Component

const { count, increment } = useCounter();

--------------------------------------------------

Important Points

- Each component gets its own state
- Logic is shared, not the state
- Hooks must be called at top level

--------------------------------------------------

Real Use Cases

- API fetching (useFetch)
- Form handling
- Authentication
- Window resize tracking
- Local storage

--------------------------------------------------

Final Understanding

- Custom hooks help in code reusability
- Makes components cleaner
- Useful in large projects

--------------------------------------------------

One Line Summary

Custom hooks allow us to reuse logic across multiple React components efficiently.