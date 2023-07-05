## Props Drilling

AppLayout.
    {state = {user}}.
        - <Body user = {user} />
            - <RestaurantContainer user =>
                - <RestaurantCard user = {user}>
                    - <h4>{user}</h4>

### PROPS DRILLING  
Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.     

## Lifting the State Up
In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.

1.  Remove state from the child components.
2.  Pass hardcoded data from the common parent.
3.  Add state to the common parent and pass it down together with the event handlers.


Reference
https://react.dev/learn/passing-data-deeply-with-context

## Problem with passing the props
Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.

Props and State are tied to component


# Context
Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

Context is not specific to any component it is central store for all components.
Context is like useState for whole application, like a data store.
Context is used for data which is required across all applications in different places
## Canw we 