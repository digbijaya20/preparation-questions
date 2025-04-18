## Takeda Pharmaceuticals(Js,ReactJs)

### Js
1. 



### React
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
> As of v16.2.0, there's no way to turn a functional component into an error boundary. The ** componentDidCatch() **  method works like a JavaScript ** catch {} **  block, but for components. 
> Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

2. 