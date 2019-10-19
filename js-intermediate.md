# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer:
    All I can recall are the CRUD actions which are Create, Read, Update, and Delete

  Researched answer:
    Post - Create
    Get - Read
    Put - Update/Replace
    Patch - Update/Modify
    Delete - Delete

    Source: https://www.restapitutorial.com/lessons/httpmethods.html

2. Why would you use object destructuring?

  Your answer:
    Object destructing helps for readability, it certain cases it can create more "elegant" code  that makes it easier to code

  Researched answer:
    It is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.

    Source: https://javascript.info/destructuring-assignment

3. Why is testing important?

  Your answer:
    To ensure sure that your code you create works for its intended purpose and to also test and work against edge cases.

  Researched answer:
    Software Testing is necessary because we all make mistakes. Some of those mistakes are unimportant, but some of them are expensive or dangerous. We need to check everything and anything we produce because things can always go wrong – humans make mistakes all the time.

    Source: http://tryqa.com/why-is-testing-necessary/

4. What is the difference between a class and an object?

  Your answer:
    What comes to mind is that objects is a type of data while classes are a little more complicated than that.

  Researched answer:
    A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.

    Source: https://www.ncl.ucar.edu/Document/HLUs/User_Guide/classes/classoview.shtml

5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer:
    I learned how mob programming pretty different than pair programming. That our group was able to utilize hooks in React and was able to utilize a decent amount of CSS.

### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer:
    You usually would import the CSS file into the HTML file
    For example:
      In the HTML file you would import the CSS file like Import './Project.css'

  Researched answer:
    <link rel="stylesheet" type="text/css" href="stylesheet.css" media="screen" />
    This is a very simple way to connect a CSS file to your HTML document. You can connect as many stylesheets as you wish using this syntax.

    Source: https://www.hostinger.com/tutorials/website/how-to-link-a-stylesheet-css-file-to-your-html-file

2. What is the difference between a div and a span?

  Your answer:
    Div is utilized to divide the HTML elements into their own sections while span is used for texts.

  Researched answer:
    Both <div> and <span> is used to define parts of a web page. The <span> element shows the inline portion of a document. The <div> elements show a block-level portion of a document.
    A div is a block-level element and a span is an inline element.
    The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc.

  Source: https://www.tutorialspoint.com/What-is-the-difference-between-HTML-tags-div-and-span

3. What is a CSS class? When should you use an id instead of a class?

  Your answer:
    A CSS class is used for elements when you want to add CSS stylings for a particular group or set of HTML elements while id's are only used for a specific/unique element.

  Researched answer:
    The basic rule that you need to keep in mind while using classes and ids in CSS is that, id is used for single elements that appear on the page for only once (e.g. header, footer, menu), whereas class is used for single or multiple elements that appear on the page for once or more than once (e.g. paragraphs, links, buttons, input boxes). While you can also use a class for a single element, in order to get used to this distinction and use these separators as they are intended, it is better to make a habit of using classes to control the style of multiple of the same type of element.

  Source: https://appendto.com/2016/04/css-class-vs-id-which-one-to-use/

4. Name 4 semantic HTML tags.

  Your answer:
    <div>
    <span>
    <p>
    <h1>

  Researched answer:
    <abbr>
    <blockquote>
    <cite>
    <em>
    <strong>

    source: https://www.lifewire.com/why-use-semantic-html-3468271

5. What are three options for creating responsive design?

  Your answer:
    Flexbox, Grid, and something that I can't seem to recall?

  Researched answer:
    Flexible layouts - Using a flexible grid to create the website layout that will dynamically resize to any width.
    Media queries - An extension to media types when targeting and including styles. Media queries allow designers to specify different styles for specific browser and device circumstances.
    Flexible media - Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes.

    Source: https://www.webopedia.com/TERM/R/responsive-website.html

### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer:
    Front End Developers deal with what is shown visually through their application. Tools such as knowing HTML, CSS, Javascript, and the React framework, all help with front end development

  Researched answer:
    A front-end developer is a web developer that codes the front end of a website. While web design is the way a website looks, front end development is how that design actually gets implemented on the web.

    The pages of the internet are a sum of layers—structure, data, design, content, and functionality. The web would be a dust bowl of HTML and "Under Construction" GIFs without front-end developers taking the backend data and creating a user-facing functionality. By integrating markup languages, design, scripts and frameworks, front-end developers create the environment for everything that users see, click, and touch.

    Source: https://www.careerexplorer.com/careers/front-end-developer/

2. What is block scope in JavaScript?

  Your answer:
    Block scope I believe has to do with the certain closures of the code?

  Researched answer:
    A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

    Source: https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11

3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer:
    An example of Inheritance is when a "child class" is copying the behavior of the "parent class" without altering the parent class.

  Researched answer:
    In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class. The terms parent class and child class are also acceptable terms to use respectively. A child inherits visible properties and methods from its parent while adding additional properties and methods of its own.

    Source: https://www.adobe.com/devnet/actionscript/learning/oop-concepts/inheritance.html
