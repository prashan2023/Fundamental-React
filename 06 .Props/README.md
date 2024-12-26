### Exercise: Here I will learn about props, props destructuring and props children.

Step 1: Create a Person Component

1 .Create a new file called as a Person.jsx
2 .Inside this file, create a functional component called as a Person
3 .This component should accept Props and render.

      - A <h2> element that displays the Person's name.
      - A <p> element that display the Person's age.

4 .Use Props.name and Props.age to display the dynamic values passed from the parent component.

Step 2: Create a Product Component

1 .Create a new file called as a Product.jsx
2 .Inside this file, create a functional component called as a Product
3 .This component should accept props and render:

      - A <h2> element that displays the product's name.
      - A <p> element that displays the product's price.

4 .Use props.name and props.price to display the values passed from the parent component.

Step 3: Create a User Component

1 .Create a new file called as a User.jsx
2 .Inside this file, create a functional component called as a User
3 .This component should accept props and render

      - A <img src="" alt=""/> element that displays your own pic.
      - A <h1> element that displays the user's name.
      - A <h2> element that displays the user's age.
      - A <h3> element that displays the user is married or unmarried.
      - a <h4> element that displays the user's hobbies.

Step 4: Pass Props from App.jsx

1 .In your App.jsx file, import the Person and Product Components:

    - import Person from "./Person";
    - import Product from "./Product";
    - import User from "./User";

2 .Inside the Appcomponent, pass dynamic data as props to Person, Product and User components:

    - Pass name and age as prpos to the Person Component.
    - Pass name and price as props to the Product Component.
    - Pass img, name, age, isMarried or not and hobbies as props to the User Component.


# Note :Props
      - Props/ properties are arguments passed into React components.
      
      - Props allows us to pass data from parent component to a child component

      - Props are passed to components via HTML attributes.


#Very Important theory part{Prop children}

## When we use the parent component and child component following below,

const App(){
      return (
        <div>
           <h1>My Card</h1>
           <p>This is some content for card 1</p>
        </div>
      )
}
export default App;

## Use a child component like that,

const Card =(props)=> {
      return(
            <div>
              {props.children}
            </div>
      )
}
export default Card;

#### In above case we can use props Destructuring.