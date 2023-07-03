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