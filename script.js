const questions = {
    html: [
        { question: "What does HTML stand for?", choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Machine Language"], correct: 0 },
        { question: "Who is making the Web standards?", choices: ["Mozilla", "Microsoft", "Google", "The World Wide Web Consortium"], correct: 3 },
        { question: "What tag is used to define an unordered list?", choices: ["<ul>", "<ol>", "<li>", "<list>"], correct: 0 },
        { question: "Which attribute is used to provide an advisory text about an element or its contents?", choices: ["alt", "title", "src", "href"], correct: 1 },
        { question: "Which HTML element is used to specify a footer for a document or section?", choices: ["<footer>", "<bottom>", "<end>", "<section>"], correct: 0 },
        { question: "In HTML, which attribute is used to specify that an input field must be filled out?", choices: ["required", "placeholder", "validate", "mandatory"], correct: 0 },
        { question: "What is the correct HTML for adding a background color?", choices: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<bg>yellow</bg>"], correct: 0 },
        { question: "Which character is used to indicate an end tag?", choices: [">", "/", "*", "<"], correct: 1 },
        { question: "Which attribute is used to link an external CSS file to an HTML document?", choices: ["src", "href", "stylesheet", "style"], correct: 1 },
        { question: "Which HTML element is used to define important text?", choices: ["<strong>", "<bold>", "<important>", "<emphasize>"], correct: 0 },
        { question: "What does the HTML <aside> element represent?", choices: ["Content aside from the page content", "A quote from another source", "A section of navigation links", "An emphasized piece of text"], correct: 0 },
        { question: "In HTML, which attribute is used to specify that an input field is read-only?", choices: ["readonly", "read", "inputonly", "ro"], correct: 0 },
        { question: "What does the HTML <cite> element represent?", choices: ["A section of navigation links", "A piece of text being defined", "The title of a work", "A quote from another source"], correct: 2 },
        { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", choices: ["title", "alt", "src", "caption"], correct: 1 },
        { question: "In HTML, which tag is used to define a hyperlink, or link to another page?", choices: ["<a>", "<link>", "<href>", "<p>"], correct: 0 },
        { question: "Which HTML element defines navigation links?", choices: ["<nav>", "<navigation>", "<navig>", "<navigate>"], correct: 0 },
        { question: "What does the HTML <abbr> element do?", choices: ["Specifies an abbreviation or acronym, like HTML, CSS, Mr., Dr., etc.", "Defines a section that contains related content", "Specifies additional details that the user can view or hide on demand", "Indicates the source of the quote or change"], correct: 0 },
        { question: "Which attribute is used to specify a unique identifier for an HTML element?", choices: ["id", "class", "name", "identifier"], correct: 0 },
    ],
    
    css: [
        { question: "What does CSS stand for?", choices: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], correct: 1 },
        { question: "Where in an HTML document is the correct place to refer to an external style sheet?", choices: ["In the <head> section", "At the end of the document", "In the <body> section", "At the top of the document"], correct: 0 },
        { question: "Which CSS property controls the text size?", choices: ["text-size", "font-style", "font-size", "text-style"], correct: 2 },
        { question: "What is the default value of the position property?", choices: ["absolute", "fixed", "relative", "static"], correct: 3 },
        { question: "Which CSS property is used to control the space between elements?", choices: ["margin", "spacing", "padding", "border"], correct: 0 },
        { question: "In CSS, which attribute is used to change the color of the text?", choices: ["text-color", "color", "font-color", "style"], correct: 1 },
        { question: "Which CSS property is used to make a rounded border?", choices: ["border-radius", "rounded-border", "corner-style", "border-round"], correct: 0 },
        { question: "What is the correct CSS syntax for making all the <p> elements bold?", choices: ["p {text-size: bold;}", "p {font-weight: bold;}", "p {bold: true;}", "p {style: bold;}"], correct: 1 },
        { question: "Which CSS property is used to change the left margin of an element?", choices: ["padding-left", "margin-left", "indent", "spacing-left"], correct: 1 },
        { question: "Which CSS property is used to add shadows to text?", choices: ["text-shadow", "shadow", "font-shadow", "text-effect"], correct: 0 },
        { question: "In CSS, what is the default value of the display property?", choices: ["block", "inline", "flex", "none"], correct: 1 },
        { question: "Which CSS property is used to control the repetition of an image in the background?", choices: ["background-repeat", "image-repeat", "background-image-repeat", "repeat-image"], correct: 0 },
        { question: "What does the CSS property 'float' do?", choices: ["Moves an element to the left or right, allowing other elements to wrap around it", "Makes an element fully transparent", "Controls the width of an element", "Displays an element as a block-level flex container"], correct: 0 },
        { question: "Which CSS property is used to control the space between lines of text?", choices: ["line-height", "text-spacing", "font-spacing", "line-spacing"], correct: 0 },
        { question: "What is the correct CSS syntax for making the background color of all <h1> elements purple?", choices: ["h1 {background-color: purple;}", "h1 {color: purple;}", "h1 {bg-color: purple;}", "h1 {text-color: purple;}"], correct: 0 },
        { question: "Which CSS property is used to control the shape or style of the corners of a box?", choices: ["corner-style", "border-corner", "border-style", "border-radius"], correct: 3 },
        { question: "In CSS, which property is used to change the size of text?", choices: ["font-size", "text-size", "size", "font-style"], correct: 0 },
        { question: "What is the correct CSS syntax for changing the font of an element to Arial?", choices: ["{font-family: Arial;}", "{text-family: Arial;}", "{family: Arial;}", "{font: Arial;}"], correct: 0 },
        { question: "Which CSS property is used to add a shadow effect to the borders of an element?", choices: ["border-shadow", "shadow", "box-shadow", "element-shadow"], correct: 2 },
    ],
    
    js: [
        { question: "What is the correct JavaScript syntax to change the content of the HTML element below?", choices: ["document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementById('demo').innerText = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';"], correct: 0 },
        { question: "Where is the correct place to insert a JavaScript?", choices: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section", "None of the above"], correct: 0 },
        { question: "How do you create a function in JavaScript?", choices: ["function = myFunction()", "function myFunction()", "create function myFunction()", "function:myFunction()"], correct: 1 },
        { question: "How do you call a function named 'myFunction'?", choices: ["call myFunction()", "myFunction()", "call function myFunction()", "invoke myFunction()"], correct: 1 },
        { question: "How do you write an IF statement in JavaScript?", choices: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"], correct: 2 },
        { question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?", choices: ["if i =! 5 then", "if (i <> 5)", "if (i != 5)", "if (i !== 5)"], correct: 2 },
        { question: "How does a WHILE loop start?", choices: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while (i++)"], correct: 0 },
        { question: "How does a FOR loop start?", choices: ["for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i++)"], correct: 0 },
        { question: "How can you add a comment in a JavaScript?", choices: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "/*This is a comment*/"], correct: 1 },
        { question: "What is the correct way to write a JavaScript array?", choices: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"], correct: 1 },
        { question: "How do you round the number 7.25, to the nearest integer?", choices: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"], correct: 0 },
        { question: "How do you find the number with the highest value of x and y?", choices: ["Math.max(x, y)", "top(x, y)", "Math.ceil(x, y)", "ceil(x, y)"], correct: 0 },
        { question: "What is the correct JavaScript syntax for opening a new window called 'myWindow'?", choices: ["myWindow = window.new('http://www.example.com')", "myWindow = window.open('http://www.example.com')", "myWindow = window.create('http://www.example.com')", "myWindow = window.openNew('http://www.example.com')"], correct: 1 },
        { question: "JavaScript is interpreted by _________", choices: ["Server", "Client", "Object", "None of the above"], correct: 1 },
        { question: "What is the correct JavaScript syntax to write 'Hello World' in an alert box?", choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"], correct: 3 },
        { question: "How do you create a date object in JavaScript?", choices: ["date = getDate()", "date = new Date()", "date = create('Date')", "date = new date()"], correct: 1 },
        { question: "What is the correct JavaScript syntax for printing content to the console?", choices: ["console.log('Hello World');", "print('Hello World');", "log('Hello World');", "console.print('Hello World');"], correct: 0 },
        { question: "Which operator is used to concatenate strings in JavaScript?", choices: ["+", "&", "*", "%"], correct: 0 },
    ],
    
    react: [
        { question: "What is a React component?", choices: ["A function or a class that optionally accepts inputs and returns a React element", "A type of HTML element", "A JavaScript function", "None of the above"], correct: 0 },
        { question: "What is the purpose of the render() method in React?", choices: ["To return a React element", "To modify the state of the component", "To update the DOM", "To handle events"], correct: 0 },
        { question: "What is JSX in React?", choices: ["JavaScript XML", "JavaScript Extended", "JavaScript Execution", "None of the above"], correct: 0 },
        { question: "Which lifecycle method is invoked immediately after a component is inserted into the DOM?", choices: ["componentWillMount", "componentDidMount", "componentWillUnmount", "componentDidUpdate"], correct: 1 },
        { question: "In React, props are ___________", choices: ["Inputs to a component", "Outputs of a component", "Internal state of a component", "Event handlers in a component"], correct: 0 },
        { question: "What is state in React?", choices: ["A built-in React object that represents the internal state of a component", "A function to update props", "A way to store data temporarily", "None of the above"], correct: 0 },
        { question: "Which method is used to change the state in React?", choices: ["setState()", "changeState()", "updateState()", "modifyState()"], correct: 0 },
        { question: "What is the purpose of keys in React lists?", choices: ["To identify unique items in a list", "To sort elements in a list", "To delete items from a list", "To add styling to list items"], correct: 0 },
        { question: "Which of the following is a correct way to handle forms in React?", choices: ["Using controlled components", "Using uncontrolled components", "Using refs", "All of the above"], correct: 3 },
        { question: "What does React Router do?", choices: ["Enables navigation among views", "Manages state in React components", "Optimizes rendering performance", "None of the above"], correct: 0 },
        { question: "What is a higher-order component (HOC) in React?", choices: ["A function that takes a component and returns a new component", "A component with higher priority in rendering", "A component that uses Hooks", "None of the above"], correct: 0 },
        { question: "What are React Hooks?", choices: ["Functions that let you use state and other React features without writing a class", "Event listeners in React components", "Built-in React components", "None of the above"], correct: 0 },
        { question: "Which method is used to fetch data in a React component?", choices: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"], correct: 0 },
        { question: "What is the purpose of useEffect() hook in React?", choices: ["To perform side effects in function components", "To update component state", "To handle events in function components", "None of the above"], correct: 0 },
        { question: "In React, what is the role of PropTypes?", choices: ["To document the intended types of properties passed to components", "To define CSS styles for components", "To handle routing in React applications", "None of the above"], correct: 0 },
        { question: "What is the purpose of React.memo()?", choices: ["To memoize the component's state", "To optimize performance by memoizing the rendering of a function component", "To handle memoized functions", "None of the above"], correct: 1 },
        { question: "What is the difference between state and props in React?", choices: ["State is internal and controlled by the component itself, whereas props are external and passed to the component", "Props are internal and controlled by the component itself, whereas state is external and passed to the component", "State and props are interchangeable in React components", "None of the above"], correct: 0 },
        { question: "What is the purpose of the useRef() hook in React?", choices: ["To create references to DOM elements or React elements", "To update component state", "To handle events in function components", "None of the above"], correct: 0 },
    ],
    
};

let currentTopic = '';
let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.querySelector('.quiz-content h1').style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionObj = questions[currentTopic][currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;
    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice, index) => {
        choice.innerText = questionObj.choices[index];
    });
}

function checkAnswer(selectedIndex) {
    const questionObj = questions[currentTopic][currentQuestionIndex];
    if (selectedIndex === questionObj.correct) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
        showQuestion();
    } else {
        // For now, just alert the score
        alert(`Quiz finished! You got ${correctAnswers} out of ${questions[currentTopic].length} correct.`);
        // Reset the quiz for now
        document.querySelector('.quiz-content h1').style.display = 'block';
        document.querySelector('.button-container').style.display = 'flex';
        document.getElementById('quiz').classList.add('hidden');
    }
}
