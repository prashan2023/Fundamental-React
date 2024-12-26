### Exercise: Rendering Multiple Component and Nested Component

Step 01: Create a Header Component,

1 . Create a new file Called as Header.jsx
2 . Inside this file, Create a functional component named as a Header
3 . The Header Component should return a <header> element with the following 
        - A <h1> element with the text "Welcome to My website!"
        - A <nav> element Containing three links (<a>) with the text "Home","About" and "Contact"

Step 02: Create a Footer Component,

1 . Create a new file called as a Footer.jsx
2 . Inside this file, Create a functional component named as a Footer
3 . The Footer Component should return a <footer> element with a <p> containing the text "@ 2024 My Website"

Step 03: Create a Maincontain Component,

1 . Create a new file called as a Maincontent.jsx
2 . Inside this file, create a functional component named as a Maincontent 
3 . The Maincontent Component should return a <main> element containing 
        - A <h2> element with the text "Main Content"
        - A <p> element with any text of your choice

Step 04: Render Components inside App.jsx

1 . In your App.jsx file, import the Header, Maincontent and Footer Components;

         - import Header from "./Header";
         - import Maincontent from "./Maincontent"
         - import Footer from "./Footer"

2 . Inside the App Component's return Satement, render the three Components inside a single <div> in the following order;

         - Header
         - Maincontent 
         - Footer

### Summary: In this Exercise, I will learn how to create multiple components and render one component inside another.

