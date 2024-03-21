import { useEffect, useRef } from "react";

const areEqual = (previousDeps, nextDeps) => {
  if (previousDeps === null) return false;
  if (previousDeps.length !== nextDeps.length) return false; // comparing the length bw previous and next

  // Now we compare each individual dependency of these two arrays and if they are matched then it gives us true otherwise it returns false

  for (let i = 0; i < previousDeps.length; i++) {
    if (previousDeps[i] !== nextDeps[i]) {
      return false;
    }
  }

  return true;
};

// Here cb = callback & deps = dependency
const useCustomMemo = (cb, deps) => {
  // variable or state -> cached value

  const memoizeRef = useRef(null);

  // changes in dependency (deps)

  if (
    !memoizeRef.current ||
    !areEqual(
      memoizeRef.current.deps,
      deps
    ) /* Here we are comparing with previous deps and new deps */
  ) {
    memoizeRef.current = {
      // Storing the previous callback and dependency value
      value: cb(),
      deps,
    };
  }

  // clean up logic

  useEffect(() => {
    return () => {
      memoizeRef.current = null;
    };
  }, []);

  // return the memorized value  (if any)
  return memoizeRef.current.value;
};

export default useCustomMemo;
