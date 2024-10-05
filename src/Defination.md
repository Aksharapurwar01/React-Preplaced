# Definition

## Controlled Components

A controlled component is a component where React controls the form element's value by keeping it in the component's state. This means that the value of the input field is always dictated by the state, making it easy to modify, validate, and control the data.

### Key Characteristics:

Value in State:
The value of the form element is stored in the component's state, and the input field's value is derived from that state.
Two-Way Binding:
Whenever the input changes, the state is updated using an onChange handler, and the input field’s value reflects the updated state.
Full Control:
Since React controls the form data, you have full control over the component, enabling features like validation, conditional rendering, or resetting the input value.

### Advantages

Ease of Validation: You can easily validate the input by checking the state value.
Centralized Control: State is the single source of truth, making data management easier.
Conditional Logic: You can manipulate or restrict values (e.g., prevent numbers or restrict length).

## UnControlled Components

A Uncontrolled Component is a component that managed directly by DOM.

### Advantages of Uncontrolled Components (Shortened)

1. **Integration with Non-React Code**: 
   - Ideal for use with third-party libraries or non-React code, minimizing React-specific logic and avoiding state conflicts.

2. **File Upload Handling**:
   - Better suited for file inputs, as browsers manage file data directly, simplifying compatibility and performance.

3. **Focus and Direct DOM Manipulation**:
   - Efficient for scenarios requiring direct DOM manipulation, such as setting focus or accessing fields via refs.

4. **Performance Benefits**:
   - Fewer React state updates mean better performance for forms with many inputs, avoiding unnecessary re-renders.

# Hooks

