### Exercise : Rendering a List of Data with .map()

Step 1 :Create a UserList Component

1 .Create a new file called as a UserList.jsx
2 .Inside this file, create a functional component called UserList 
3 .In this component, create a Users array with the following objects, where each object represents a User with Id, name, and age:

  - const User = [
    { id : 1, name : "Alice" , age : 25},
    { id : 2, name : "Bob" , age : 30},
    { id : 3, name : "Charlie" , age : 22}
  ];

4 .Use the .map() method to render a list of Users. Each User's name and age should be displayed inside a <div> element. Use the id as the unique key for each list item.

Step 2 : Create a ProductList Component 

1 .create a new file called as a ProductList.jsx
2 .Inside this file, create a functional component called ProductList
3 .Create a products array with following objects, where each object represents a product with id, name, and price:

  - const products = [
    { id : 1, name : "Phone", price : "$699" },
    { id : 2, name : "Laptop", price : "$1200" },
    { id : 3, name : "Headphones", price : "$199" },
  ];

4 .Use the .map() method to render the list of products. Each product's name and price should be displayed inside a <div> element. Use the id as the key for the each product

Step 3: Render the components in App.jsx

1 .In your App.jsx file, import the UserList and ProductList components:

     - import UserList from "./UserList";
     - import ProductList from "./ProductList";

2 .Inside the App component's return Statement, render both the UserList and ProductList components:

     - function App(){
        return(
            <div>
              <UserList/>
              <ProductList/>
            </div>
        )
     }
     export default App;

### Summary : In this Exercise, I will learn how to render a list  of items using the     map() method in the JSX,


# Note :(Lists)

  - In React, you will render lists some type of loop.  #The Javascript map()# array method is generally the perferred mothod.
 