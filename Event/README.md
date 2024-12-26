## Exercise : Handling the Events in React

Step 1: Create a EventDemo Component

1 .Create a new file called EventDemo.jsx
2 .Inside this file, create a functional component called EventDemo
3 .The component should render the following elements:
        - A <button> that, when clicked, updates the text of <p> element to "Button Clicked!"
        - A <div> containing a <p> element. When text inside the <p> element is copied, the text should change to "Text Copied!"
        - A <div> containing a <p> element. when the mouse hovers over the <p> element, the background color should change to light yellow.

Step 2:Render the EventDemo Component in App.jsx

1 .In your App.jsx file, import the EventDemo component:
         import EventDemo from "./EventDemo.jsx"

2 .Inside the App component, render the EventDemo component:

          function App(){
            return(
                <div>
                  <h1>React Event</h1>
                  <EventDemo/>
                </div>
            )
          }  
          export default App;
      