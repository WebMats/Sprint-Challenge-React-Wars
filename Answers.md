# Answers

1.  What is React JS and what problems does it try and solve?
        Ans: React is a compendium of Javascript code, which exposes a library of methods that 
        collects, transforms, and displays our code in the browser. Primarily, React solves scalability issues, by
        helping us write DRY and maintainable code.

1.  What does it mean to _think_ in react?
        Ans: It is important to _think_ in react in order to have the foresignt to transform
        a mockup into a fully functioning well-built react app. This means knowing how to dissect a full application
        into modular parts that have a wide degree of reusability, as well as having an idea of the responsibilities and 
        relationships each of those parts have to the wider app.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
        Ans: Class components make use of react's Component class. They use this.props to access properties passed to them,
            in addition, they have lifecycle hocks (e.g. ComponentDidMount, getDeriveStateFromProps). Most importantly, they
            hold the state/part-of-the-state of an application.
            
            Functional components are essentially javascript functions that are passed a 'props' variable,
            which holds properties passed into their JSX component representation. They do not have lifecycle-hocks 
            (except when used with another library that wraps react). Functional components do not hold state, but can,
            through their props change the app's state.

1.  Describe state.
        Ans: In react state refers to the data which our app depends on. It controls the view that the user sees and can be
        indirectly updated by the user through methods that call this.setState(). It lives inside Stateful components and 
        should be kept immutable.

1.  Describe props.
        Ans: props are passed into stateful and functional components from components that hold their JSX representations.
        props do not need to be immutable, so long as their reassigment does not mutate state.