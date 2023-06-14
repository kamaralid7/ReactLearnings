# Class Based Components

Just like functional component at the end of the daty are normal Javascript functions
Class based components at the end of the day are normal Javascript classes

The only mandatory function in class based component is render() method which returns a JSX

# What is Different in creating a class based componet as below
1. keyword class 
2. name of class
3. keyword extends
4. React.Component

We export our class 

# We use extends keyword because
Our component class is inheriting from React.Component

# Using props in class based component

we use this.props in class based component

When React sees props it will collect all the props and will attach it to this object of the class

# Creating state in class based component
In functional components we do import of a hook useState from react to create a s state

In class based components a class has a constructor and the best place to create state is a constructor
We can also destructure state

# this.setState{}
React gices access to the setState which makes changes in state variables.
React triggers the reconcilliation program after the setState is called which makes changes in DOM

We need to send a modified object into setState 

setState will only modify partial object which is passed to this.setState{} . It will not modify everything

# React Life Cycle
The component executes in foll order
1. constructor()
2. render()
3. componentDidMount()


Best place to make API call in class based component id compnentDidMount() function because first React will render eerything and then it will update the state

best place to make API call in function based component is useEffect(callback_function, dependency_array)
# We do not mutate state directly


# Lifecycle execution of Components

1. Parent - constructor
2. Parent - render
3. Child - constructor - First Child
4. Child - render - First Child
5. Child - constructor - Second Child
6. Child - render - Second Child
------------------------------------
Dom is updated for children
--------------------------------------
7. Child - componentDidMount - First Child
8. Child - componentDidMount - Second Child
9. Parent - componentDidMount 


# Two Phases of Rendering

There are two phases when Reconcilliation is happening
1. Render Phase - Pure and has no effects. May be paused, aborted or restarted by React

Constructor is called
Render method is called
(It will generate the core HTML )

2. Commit Phase - Can work with DOM, run side effects, schedule updates

React actually updates Dom and ref
componentDidMount() is called

# Why useEffect callback method cannot be made async but componentDid mount can be made async                

# Why super(props) is called as first statement of constuctor in Component