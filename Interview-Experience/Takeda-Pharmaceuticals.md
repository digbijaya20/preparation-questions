# Takeda Pharmaceuticals(Js,ReactJs)

# Js
1. Differece between Async await and promise.
2. Differece betw var, let and const.
3. == and ===
4. What is Event Propagation?
When an event occurs on a DOM element, that event does not entirely occur on that just one element. In the Bubbling Phase, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window while in the Capturing Phase the event starts from the window down to the element that triggered the event or the event.target.

5. What's the difference between event.preventDefault() and event.stopPropagation() methods?
The event.preventDefault() method prevents the default behavior of an element. If used in a form element it prevents it from submitting. If used in an anchor element it prevents it from navigating. If used in a contextmenu it prevents it from showing or displaying. While the event.stopPropagation() method stops the propogation of an event or it stops the event from occurring in the bubbling or capturing phase.



# React
1. #### What are Error Boundaries?
Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app.
They help your app fail gracefully instead of breaking completely when something goes wrong.

#### 🧠 What Can They Catch?
* Rendering errors
* Lifecycle method errors
* Errors in constructors of child components

#### ❌ What They Can’t Catch:
* Event handler errors (you handle these yourself with try/catch)

* Asynchronous errors (like inside setTimeout)

* Server-side rendering errors
> [!NOTE]
> As of v16.2.0, there's no way to turn a functional component into an error boundary. The **componentDidCatch()**  method works like a JavaScript **catch {}**  block, but for components. 
> Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.
