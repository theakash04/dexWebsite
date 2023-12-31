// gitPage
async function githubProfile(){
  //data response and storing
  const gitProfile = 'https://api.github.com/users/theakash04';
  const response = await fetch(gitProfile);
  const dexData = await response.json();
  
  //dom connect
  let avtar = document.querySelector("#avtar");
  let userdetails = document.querySelector("#userId");
  let followbtn = document.querySelector("#followbtn");

  //dom data entry or settings
  avtar.setAttribute('src', dexData.avatar_url);
  userdetails.children[0].innerHTML = dexData.name;
  userdetails.children[1].innerHTML = dexData.login;
  followbtn.textContent = dexData.followers;

  // btn click event
  followbtn.addEventListener('click', ()=>{
    window.open(dexData.html_url, '_blank')
  })
  
}
githubProfile();




