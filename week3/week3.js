/*
NOTES
- THIS keyword references current object or global object
- Objects act as a collections of properties that help define a value
- const ironMan = { name, realName };
- you access properties by objectname.property or by []
- You can check if properties exist within an object with "in"
- Objects can contain other objects
- You can pass objects into functions
- Putting methods within objects so you don't run into duplicate method names
- There are built in objects in JS and you can add objects for additional functionalites
- The DOM model is a way of understanding html page as nodes
- Different JS selectors can be used to get access to different HTML elements
- You can change the attribute of an HTML element using the getAttribute() and you can
change it with the setAttribute() function
- The CSS property of an HTML element can be modified, added to, or subtracted
from using the STYLE property
- Events are when a user has some kind of interaction with a web page,
you can use EVEN listeners to know where users are interacting
- You can attach event listeners to different elements that triger
JS functionality to have interaction with the user
-Tons of different kinds of event listeners you can use such as mouse movement,
 keyboard event, and touch/click events.
 -Event propogations determins the order in which different events are fired
 -Event delegation is when an even listeneter is attached to a parent elemtn 
 so that you can capture the different events of the children elements
*/
/*
 CODE SANDBOX
 <script>
  let dots = [];
  for (let i = 0; i < 12; i++) {
    let node = document.createElement("div");
    node.className = "trail";
    document.body.appendChild(node);
    dots.push(node);
  }
  let currentDot = 0;
  
  window.addEventListener("mousemove", event => {
    let dot = dots[currentDot];
    dot.style.left = (event.pageX - 3) + "px";
    dot.style.top = (event.pageY - 3) + "px";
    currentDot = (currentDot + 1) % dots.length;
  });

  function byTagName(node, tagName) {
    let found = [];
    tagName = tagName.toUpperCase();

    function explore(node) {
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName == tagName) found.push(child);
          explore(child);
        }
      }
    }

    explore(node);
    return found;
  }

  console.log(byTagName(document.body, "h1").length);
  console.log(byTagName(document.body, "span").length);
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
</script>
*/