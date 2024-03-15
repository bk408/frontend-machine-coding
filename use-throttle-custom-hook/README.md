

# Problem Statement:

 Task: 🎨 Implement a performance optimization technique inside a react app by creating a custom hook called use throttle. 🚀 #React #Optimization 🔄


# useThrottle Hook

🌟 Initialize State
1) Create a state to hold the throttled value using useState.

🌟 Track last execution Time
1) useRef to keep of the last time the function was executed

🌟 useEffect for Throttling

1) Set up a Timer (using setTimeout) to handle the logic

2) Inside Timer
 (a) check the time elapsed since last execution
 
 (b) If the elapsed time is greater than or equal to the specified delay, update the throttled value and the last execution time.

 3) Calculate the remaining time for next execution (if any)   

 4) Return a cleanup function to clear the timer

 5) Return the throttled value from the hook


