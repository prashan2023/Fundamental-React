# Exercise : Using Dynamic Content with {} in JSX

Step 1: Create a Greeting Component

1 .Create a new file called Greeting.jsx 
2 .Inside this file, create a functional component named Greeting.
3 .The Greeting component should return a <div> containng:

       - A <h1> element that dynamically display a greeting massage.
       - A <p> element that dynamically displays the current date.

4 .Use javascript expression inside {} to dynamically render the following:

       - A name variable containing name, such as "John"
       - A new Date() object to display the current date.

Step 2: Create a ProductInfo Component

1 .Create a new file called as a ProductInfo.jsx
2 .Inside this file, create a functional component named  ProductInfo
3 .The ProductInfo component should return a <div> that dynamically display product details:
       
       - Use a product object that contains the following properties:
            * name : "Laptop"
            * price : "$1200"
            * availability : "In stock"

4 . Display the product name,price, and availabilty using {}.

Step 3: Render Components in App.jsx
   
1 .In your App.jsx file, import the Greeting and ProductInfo components:

       - import Greeting from "./Greeting" ;
       - import ProductInfo from "./ProductInfo" ;

2 .Inside the App component's return Statement, render both components:

        function App() {
            return(
                <div>
                   <Greeting/>
                   <ProductInfo/>
                </div>
            )
        }


### Summary : In this exercise, I will learn how to inject dynamic data info JSX using curly braces {}.