Exercises: Conditional Rendering in React

Step 1: Create a Weather Component with if, else if, and else

1 .Create a new file called Weather.jsx
2 .Inside this file, Create a functional component called as a Weather
3 .The component should:
       -Take a temperature prop.
       -Use if, else if, and else Statements to conditionally render different messages based on the temperature value:
           * If the temperature is below 15, display: "It's cool outside!" 
           * If the temperature is between 15 and 25, display: "It's nice outside!"
           * If the temperature is above 25, display: "It's hot outside!"

Step 2: Create a UserStatus Component with the && Operator

1 .Create new file called as a UserStatus.jsx
2 .Inside this file, create a functional component called UserStatus
3 .The Component should:
       -Take two boolean props loggedIn, isAdmin.
       -Use the && operator to display a message for Admin & Nomal User:
            * If loggedIn is true and isAdmin display "Welcome Admin".
            * If it's just loggedIn and not admin then display "Welcome User".

Step 3: Create a Greeting Component with a Ternary Operator

1 .Create new file called as a Greeting.jsx
2 .Inside this file, Create a functional component called as a Greeting.
3 .The component should:
       -Take a timeofDay prop (e.g. "morning","afternoon")
       -Use the ternary operator to conditionally display different greetings based on the time of day:
            * If timeofDay is "morning", display "Good morning!"
            * If timeofDay is "afternoon", display "Good afternoon!"

Step 4: Create a Cart Component with a Ternary Operator

1 .Create new file called as a Cart.jsx 
2 .Inside this file, Create afunctional component called as a Cart.
3 .The component Should:
       -Take a array of product prop(items =["wireless Earbuds", "Power Bank", "New SSD","Hoddie"];)
       -Use the ternary operator to conditionally display each products;
            * <h1> Cart 🛒 </h1>
            * <h2> You have .. number of items in your cart </h2>
            * <h4> Products </h4>
            * In ordered list continously display each components.

Step 5: Render the Components in App.jsx

1 .In this App.jsx file, import the Weather, UserStatus, Greeting and Cart components:

       - import Weather from "./Weather";
       - import UserStatus from "./UserStatus";
       - import Greeting from "./Greeting";
       - import Cart from "./Cart";

2 .Inside the App component, render each component with different props to test conditional rendering logic;

## Summary: In this exercise I will learn about how to render component with test the conditional rendering logic 🚀

### Note : Conditional rendering:
       -Conditional rendering allows us to dynamically display different UI components or  content based on specific conditions. This enables us to create more interactive and responsive user experiences.
 