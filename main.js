
function global(){
  body=document.querySelector('body');
  container=document.createElement('div');
  container2=document.createElement('div');
  currentcolor='white';
  body.style.backgroundColor=currentcolor;
  container.className='container';
  container2.id='container2';
  container2.className='container';
  body.appendChild(container);
  body.appendChild(container2);
}

function gridcreate () {
  for (let i=0; i < 40 ; i++) {
    var row=document.createElement('div');
    row.className='row';
    row.style.backgroundColor='white';
    // row.style.border='1px solid black';
    for (let i2=0; i2 < 40; i2++) {
      var box=document.createElement('div');
      box.className='box';
      // box.id=i.toString()+i2.toString();
      box.addEventListener('click', clickevent);
      box.addEventListener('mousedown', mousedown);
      box.addEventListener('mouseup', mouseup);
      box.addEventListener('mouseover', mouseover);
      // box.addEventListener('mousedown', clickevent);
      row.appendChild(box);
    }
    container.appendChild(row);
  }
  for (let i = 0; i < 10; i++) {
    var colors=document.createElement('div');
    var color=['red', 'green', 'black', 'blue', 'goldenrod', 'grey', 'pink', 'orange', 'limegreen', 'white'];
    colors.className='colors';
    colors.style.backgroundColor=color[i];
    colors.addEventListener('click', colorchange);
    container2.appendChild(colors);
  }
  var clearbutt=document.createElement('button');
  clearbutt.textContent='CLEAR';
  clearbutt.id='clear';
  clearbutt.addEventListener('click', colorchange);
  container2.appendChild(clearbutt);
}

global();
gridcreate();

var mouse = false;

function clickevent(event) {
  event.target.style.backgroundColor=currentcolor;
  event.target.style.border='1px solid' + currentcolor;
}

function colorchange (event) {
  if (event.target.textContent==='CLEAR') {
    // console.log('cleared');
    document.body.innerHTML='';
    global();
    gridcreate();
  }
  currentcolor=event.target.style.backgroundColor;
  body.style.backgroundColor=currentcolor;
}

function mousedown(event) {
  mouse = true;
  event.target.style.backgroundColor=currentcolor;
  event.target.style.border='1px solid' + currentcolor;
}

function mouseup() {
  mouse = false;
}

function mouseover(event) {
  if (mouse===true){
    event.target.style.backgroundColor=currentcolor;
    event.target.style.border='1px solid' + currentcolor;
  }
}
