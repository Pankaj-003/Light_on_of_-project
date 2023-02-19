let light=document.getElementById('light-box-light');

let toggleBtn = document.getElementById('toggle-btn');

let isOn = false;

toggleBtn.addEventListener('click', () => {
  if (isOn) {
  
    toggleBtn.style.backgroundColor = '#3cba54';
    toggleBtn.style.float="right";
 
    light.style.display="block";
    // light.style.transition='5s';
    isOn = false;
  } else {
   
    toggleBtn.style.backgroundColor = '#ddd';
    toggleBtn.style.float="left";
    light.style.display="none";
    isOn = true;
  }
});
