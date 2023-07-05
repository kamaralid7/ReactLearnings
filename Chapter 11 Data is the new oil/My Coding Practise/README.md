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


https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.png&w=1920&q=75

# Context
