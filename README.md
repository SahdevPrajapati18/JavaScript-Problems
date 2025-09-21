"#JavaScript Problems" 

Problems Using Conditional Statements

1. Odd or Even
    Write a Program to check whether a given number is odd or even using 
    if-else

2. Grade Calculator
    Take a student's marks as input and print their grade using conditions:

    90-100: A
    80-89: B
    70-79: C
    60-69: D
    < 60: F

3. Leap Year Check
    Determine whether a given year is a leap year.

4. Maximmum of Three Numbers
    Find the largest of three numbers using nested if statements.

5. Check Vowel or Consonant
    Check if a given character is a vowel or a consonant.

6. Positive, Negative, or Zero
    Check if a given number is positive, negative, or zero.

7. Calculator Program
    Perform addition, subtraction, multiplication, or division based on user input(e.g., using if-else or switch).

8. Day of the Week
    Take a number (1-7) as input and print the corresponding day of the week.

9. Eligible to Vote
    Check if a person is eligible to vote based on their age (age>= 18).

10. Triangle Type 
    Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.

Problems Using Loops

11. Multiplcation Table
    Write a program to print the multiplication table of a given number, using a loop.

12. Factorail of a Number
    Calculate the factorial of a given number uisng a for loop.

13. Sum of Natural Numbers
    Find the sum of first n natural numbers using a loop.

14. Reverse a Number
    Write a program to reverse the digits of a number using a loop.

15. Print Even Numbers
    Print all even numbers from 1 to 50 using a loop.

16. Count Digits in a Number
    Count the number of digits in a given number using a loop.

17. Fibonacci Series
    Generate the first n terms of the Fibonacci sequence using a loop.

18. Sum of Digits
    Find the sum of the digits of a number using a loop.

19. Pattern Printing (Pyramid)
    Print a pyramid pattern of * of height n using nested loops.

20. Check Prime Number
    Check if a given number is prime using a loop.

Theoretical Portion of JavaScript

1. What is Event Capturing?
When an event(like a mouse click) happens on an element inside a nested structure (say, a button inside a div inside the body), the browser determines which element should handle the event first.
In event capturing, the event is first captured by the outermost element and then propagated down to the target element. This means that the event starts from the top of the DOM tree and moves down to the target element.
For example, if you click a button inside a div, the event will first be captured by the body, then the div, and finally the button.

2. What is Event Bubbling?
Event bubbling is the opposite of event capturing. In event bubbling, the event starts from the target element and then propagates up to the outer elements in the DOM tree.
When an event occurs on an element, it first triggers the event handler on that element and then moves up to its parent elements, triggering their event handlers as well.
For example, if you click a button inside a div, the event will first be handled by the button, then the div, and finally the body.

3. Event Trickling
Event trickling is another term for event capturing. It refers to the process where an event is captured by the outermost element and then propagated down to the target element in the DOM tree.

4. Difference between Event Capturing and Event Bubbling
| Aspect               | Event Capturing                          | Event Bubbling                           |
|----------------------|------------------------------------------|------------------------------------------|
| Propagation Order    | From outermost element to target element | From target element to outermost element |
| Event Phase          | Capturing phase                          | Bubbling phase                           |
| Default Behavior     | Not the default behavior                 | Default behavior                         |
| Use Case             | Less commonly used                       | More commonly used                       |

5. How to stop Event Bubbling?
You can stop event bubbling by using the `stopPropagation()` method on the event object within an event handler. This prevents the event from propagating up to parent elements.

Example:
```javascript
document.getElementById("myButton").addEventListener("click", function(event) {
    event.stopPropagation(); // Stops the event from bubbling up
    alert("Button clicked!");
});

document.getElementById("myDiv").addEventListener("click", function() {
    alert("Div clicked!");
});
```
In this example, clicking the button will only trigger the button's click event and not the div's click event because `stopPropagation()` is called.

6. What is Event Delegation?
Event delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements. Instead of attaching event listeners to each individual child element, you attach one listener to the parent and use event propagation (bubbling) to handle events from the children.
This approach is efficient and reduces memory usage, especially when dealing with a large number of child elements.
Example:
```javascript
document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target && event.target.matches("button.child")) {
        alert("Child button clicked: " + event.target.textContent);
    }
});
```
In this example, a single click event listener is added to the parent element with the ID "parent". When any button with the class "child" inside the parent is clicked, the event listener checks if the clicked target matches the selector and executes the corresponding action. This way, you don't need to add separate event listeners to each child button.

7. Events in JS?
Events in JavaScript are actions or occurrences that happen in the browser, which can be detected and handled using event listeners. Events can be triggered by user interactions (like clicks, key presses, mouse movements), browser actions (like page load, resize), or programmatic actions (like timers).

Common types of events in JavaScript include:
- Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove
- Keyboard Events: keydown, keyup, keypress
- Form Events: submit, change, focus, blur
- Window Events: load, resize, scroll, unload
- Touch Events: touchstart, touchmove, touchend
- Clipboard Events: copy, cut, paste
- Drag and Drop Events: dragstart, dragover, drop
- Media Events: play, pause, ended, volumechange

Events are typically handled using event listeners, which are functions that are executed when a specific event occurs on a particular element. You can add event listeners using methods like `addEventListener()`.

Example of adding an event listener:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("myInput").
addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

window.addEventListener("load", function() {
    console.log("Page loaded!");
});
```
In this example, event listeners are added to a button, an input field, and the window object to handle click, keydown, and load events respectively.

8. What is Event Loop?
The event loop is a fundamental concept in JavaScript that enables asynchronous programming by allowing non-blocking operations. It is responsible for managing the execution of code, handling events, and executing callback functions.
JavaScript is single-threaded, meaning it can only execute one task at a time. However, it can perform asynchronous operations (like fetching data from a server or reading files) without blocking the main thread. This is where the event loop comes into play.

The event loop continuously checks the call stack (where functions are executed) and the message queue (where asynchronous events are queued). When the call stack is empty, the event loop takes the first event from the message queue and pushes its associated callback function onto the call stack for execution.

Here's a simplified overview of how the event loop works:
1. The call stack executes synchronous code line by line.
2. When an asynchronous operation (like a setTimeout or an API call) is encountered, it is offloaded to the Web APIs provided by the browser (or Node.js environment).
3. Once the asynchronous operation is complete, its callback function is added to the message queue.
4. The event loop checks if the call stack is empty. If it is, it takes the first callback from the message queue and pushes it onto the call stack for execution.
5. This process continues, allowing JavaScript to handle multiple tasks efficiently without blocking the main thread.

Example:
```javascript
console.log("Start");
setTimeout(function() {
    console.log("Timeout callback");
}, 2000);
console.log("End");
```
In this example, "Start" and "End" will be logged immediately, while "Timeout callback" will be logged after a 2-second delay, demonstrating how the event loop handles asynchronous operations.

9. Call Stack in JS?
The call stack is a data structure used by JavaScript to keep track of function calls. It operates on a Last In, First Out (LIFO) principle, meaning that the most recently added function is the first one to be executed.
When a function is called, it is added (pushed) to the top of the call stack. When the function completes its execution, it is removed (popped) from the stack. If a function calls another function, the new function is added to the top of the stack, and this process continues until all functions have been executed.

10. Callback Hell or Christmas Tree Problem in JavaScript?
Callback Hell (a.k.a Christmas Tree Problem) in JavaScript

1. What it is?

Callback hell happens when we use many nested callback functions to handle asynchronous operations.

Each function depends on the result of the previous one, so we keep passing callbacks into callbacks.

The code structure starts looking like a pyramid or Christmas tree, which makes it:

Hard to read

Hard to debug

Hard to maintain

2. Why it happens?
It happens because JavaScript is single-threaded and uses callbacks to handle asynchronous tasks like API calls, timers, or file operations.

When we have multiple asynchronous operations that depend on each other, we end up nesting callbacks inside callbacks.
3. Example of Callback Hell
```javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            processData(c, function(result) {
                console.log("Final result:", result);
            });
        });
    });
});
```
In this example, each function depends on the result of the previous one, leading to deep nesting.
4. How to avoid Callback Hell?
We can avoid callback hell by using:
Promises: They allow chaining asynchronous operations without deep nesting.
Async/Await: This syntax makes asynchronous code look like synchronous code, improving readability.
Example using Promises:
```javascript
getData()
    .then(a => getMoreData(a))
    .then(b => getEvenMoreData(b))
    .then(c => processData(c))
    .then(result => {
        console.log("Final result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
``` 
Example using Async/Await:
```javascript
async function fetchData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getEvenMoreData(b);
        const result = await processData(c);
        console.log("Final result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchData();
```
In this example, the async/await syntax makes the code easier to read and maintain, avoiding the pyramid structure of callback hell.

11. What are Promises in JavaScript?
Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner and more manageable way to handle asynchronous code compared to traditional callback functions.
A Promise can be in one of three states:
1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
3. Rejected: The operation failed, and the promise has a reason for the failure (an error).
Promises are created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`. You call `resolve` when the operation is successful and `reject` when it fails.
Example of creating and using a Promise:
```javascript
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., API call)
    setTimeout(() => {
        const success = true; // Change to false to simulate failure
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2000);
});

myPromise
    .then(result => {
        console.log(result); // "Operation successful!" if resolved
    })
    .catch(error => {
        console.error(error); // "Operation failed." if rejected
    });
```

In this example, a Promise is created that simulates an asynchronous operation using `setTimeout`. After 2 seconds, it either resolves with a success message or rejects with an error message. The `then` method is used to handle the resolved value, and the `catch` method is used to handle any errors.

