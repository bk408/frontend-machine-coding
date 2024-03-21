# useState =>

Whenever state changes in react or react component then whole component will re-render.

so, If we want to find a solution for this issue then we can use useMemo Hook.

# useMemo =>

useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

useMemo take two things where first is calculate value which is function and second is dependency array.

Here, this dependency array says that only fire of this function when the items inside of it's dependency array changes. 

useMemo returns us a "value"


# Process

- Create a simple counter  using useState
- create a squared counter using useState
- create a decrement button using useState

- Create a useMemo Hook

- Create a custom useMemo hook



# Custom Hook for useMemo

- variable or state -> cached value =: Where we want to store the details
- changes in dependency (deps)
- clean up logic
- return the memorized value  (if any)