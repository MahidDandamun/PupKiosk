 function showDialogue(id, place){
  var x=document.querySelector('.modalkiosk');
  document.getElementById('image').src="./buildings/"+(id)+".jpg";
  document.getElementById('pname').innerHTML=(place);
  x.showModal();
}
function Closemodal(){
  var x=document.querySelector('.modalkiosk');
  x.close();
}

function openTab(evt, floorTab){
  var i,tablinks, rightTab;
  rightTab = document.getElementsByClassName("rightTab");
  for (i = 0; i < rightTab.length; i++) {
    rightTab[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  x=document.getElementById(floorTab);
  x.style.display="flex";
  x.style.flexDirection="column";
  
  evt.currentTarget.className += " active";
  
}

function MouseOverfunction(id){
  if(id=="north"){  
    x=document.getElementById('info1')
    x.style.display='flex';
    x.style.justifyContent='center';
    x.style.top='190px';
    x.style.left='53%';
  
  }
  else if(id=='south'){
    x=document.getElementById('info2')
    x.style.display='flex';
    x.style.justifyContent='center';
    x.style.top='65%';
    x.style.left='55%';

  }
  else if(id=='east'){
    x=document.getElementById('info3')
    x.style.display='flex';
    x.style.justifyContent='center';
    x.style.top='50%';
    x.style.left='62%';

  }
  else if(id=='west'){
    x=document.getElementById('info4')
    x.style.display='flex';
    x.style.justifyContent='center';
    x.style.top='50%';
    x.style.left='28%';


  }
}


function MouseOutfunction(id) {
  if(id=="north"){
    document.getElementById('info1').style.display='none';
  }
  else if(id=='south'){
    document.getElementById('info2').style.display='none';
  }
  else if(id=='east'){
    document.getElementById('info3').style.display='none';
  }
  else if(id=='west'){
    document.getElementById('info4').style.display='none';
  }
}


function Closefunction(id){
  var modnorth =document.querySelector('#modnorth');
  var modsouth =document.querySelector('#modsouth');
  var modeast =document.querySelector('#modeast');
  var modwest =document.querySelector('#modwest');
  if (id=='xsouth')
  {
    modsouth.close();
    modsouth.style.display='none';
  }
  else if (id=='xnorth')
  {
    modnorth.close();
    modnorth.style.display='none';
  }
  else if (id=='xeast')
  {
    modeast.close();
    modeast.style.display='none';

  }
  else if (id=='xwest')
  {
    modwest.close();
    modwest.style.display='none';

  }
}

function MouseClickfunction(id){
  var modnorth =document.querySelector('#modnorth');
  var modsouth =document.querySelector('#modsouth');
  var modeast =document.querySelector('#modeast');
  var modwest =document.querySelector('#modwest');
  var southDefaultTab =document.querySelector('#defaultOpenS');
  var eastDefaultTab =document.querySelector('#defaultOpenE');
  var westDefaultTab =document.querySelector('#defaultOpenW');
  if(id=="north"){
    modnorth.showModal();
    modnorth.style.display='flex';
  }
  else if(id=='south'){
    modsouth.showModal();
    southDefaultTab.click();
    modsouth.style.display='flex';
  }
  else if(id=='east'){
    modeast.showModal();
    eastDefaultTab.click();
    modeast.style.display='flex';
  }
  else if(id=='west'){
    modwest.showModal()
    westDefaultTab.click();
    modwest.style.display='flex';

  }

}