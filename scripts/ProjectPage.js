const projects =  [//whenever upload a new project write on first ..
  {
    imgs: "../project-images/github.png",
    title: "Git user finder",
    description: "Discover Github users easily with Git User Finder a simple, responsive web app for exploration.",
    link: "https://github.com/theakash04/Git-user-finder"
  },

  {
    imgs: "../project-images/icons8-password-48.png",
    title: "Password Generator",
    description: "Generate strong, secure passwords effortlessly with this user-friendly web app for enhanced online security.",
    link: "https://github.com/theakash04/Random-Pass-Genrator.git",
  },  

  {
    imgs: "../project-images/js.png",
    title: "JS Q/A Webapp",
    description: "Practice, track progress, and enhance skills with interactive JavaScript questions.",
    link: "https://github.com/theakash04/Js-Question-webApp.git",
  },

  {
    imgs: "../project-images/list.png",
    title: "To Do list",
    description: "This web app is used Record your task beautifully",
    link: "https://github.com/theakash04/ToDoList-webapp.git",
  },

  {
    imgs: "../project-images/cloudy.png",
    title: "Weather Webapp",
    description: "This web app is used to check weather temprature using city name",
    link: "https://github.com/theakash04/Weather-Webapp.git",
  },

  {
    imgs: "../project-images/exchange.png",
    title: "Currency Converter",
    description: "This web app is used to Convert amounts from one currency to two others",
    link: "https://github.com/theakash04/Currency-Converter.git",
  },

  {
  imgs: "../project-images/tic-tac-toe.png",
  title: "Tic Tac Toe",
  description: "Play the classic Tic Tac Toe two player Web Game",
  link: "https://github.com/theakash04/ticTacToe-WebGame.git",
  },
  
  {
    imgs: "../project-images/rock-paper-scissors.png",
    title: "Rock Paper Scissors",
    description: "Play the classic Rock paper scissors Web Game",
    link: "https://github.com/theakash04/stone-paper-scissor.git",
  },
]

let projectsContainer = document.querySelector('#projects-container');



  


let i;

const projectfns = () =>{
  let project = document.createElement('div');
  let img = document.createElement('img');
  let textbox = document.createElement('div');
  let span = document.createElement('span');
  let p = document.createElement('p');
  let buttonContainer = document.createElement('div');
  let gitlink = document.createElement('a');
  let button1 = document.createElement('button');

  project.className = 'project'

  //inner project div
  img.src = `${projects[i].imgs}`
  textbox.className = 'textBox'
  buttonContainer.className = 'btns'

  //inner textbox div
  span.textContent = `${projects[i].title}`
  p.textContent = `${projects[i].description}`

  //inner buttonContainer div
  gitlink.href = projects[i].link;

  //inner gitlink
  button1.innerText = 'See Now!'


  //appending all now
  projectsContainer.appendChild(project);

  // appending inner project div
  project.appendChild(img);
  project.appendChild(textbox);
  project.appendChild(buttonContainer);

  //appending inner textbox div
  textbox.appendChild(span)
  textbox.appendChild(p)

  //apending inner buttoncontainer
  buttonContainer.appendChild(gitlink);

  //apending inner gitlink and liveprev
  gitlink.appendChild(button1)
}

  

for(i = 0; i<projects.length; i++){
  projectfns();
}




  

  
