# useFocusManagement

React hook allowing for programmatic control over the currently focused
element.

## Installation

```sh
npm install react-use-focus-management
```

## Interface

`useFocusManagement()` takes no arguments and returns an array with two elements:

* A ref. The element this ref is attached to will be the focus target.
* A function. When called, it will cause the element to gain focus after the next render.

## Usage

### Simple Example
```jsx
import useFocusManagement from 'react-use-focus-management';

function MyComponent {
  const [inputRef, focusOnInput] = useFocusManagement();

  return (
    <div>
      <label for="name">Name</label>
      <input id="name" ref={inputRef}>

      <button type="button" onClick={() => focusOnInput()}>
        Focus on name input
      </button>
    </div>
  );
}
```

### Multiple Focusable Elements
```jsx
import useFocusManagement from 'react-use-focus-management';

function MyComponent {
  const [nameRef, focusOnName] = useFocusManagement();
  const [emailRef, focusOnEmail] = useFocusManagement();

  return (
    <div>
      <label for="name">Name</label>
      <input id="name" ref={nameRef}>

      <label for="email">Email</label>
      <input id="email" ref={emailRef}>

      <button type="button" onClick={() => focusOnName()}>
        Focus on name input
      </button>

      <button type="button" onClick={() => focusOnEmail()}>
        Focus on name input
      </button>
    </div>
  );
}
```
