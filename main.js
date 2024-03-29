
var body=document.querySelector('body');
var mouse = false;

function gridcreate () {
  var container=document.createElement('div');
  var container2=document.createElement('div');
  var currentcolor='white';
  body.style.backgroundColor=currentcolor;
  container.className='container';
  container2.id='container2';
  container2.className='container';
  body.appendChild(container);
  body.appendChild(container2);
  for (let i=0; i < 40 ; i++) {
    let row=document.createElement('div');
    row.className='row';
    row.style.backgroundColor='white';
    // row.style.border='1px solid black';
    for (let i2=0; i2 < 40; i2++) {
      let box=document.createElement('div');
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
    let colors=document.createElement('div');
    let color=['red', 'green', 'black', 'blue', 'goldenrod', 'grey', 'pink', 'orange', 'limegreen', 'white'];
    colors.className='colors';
    colors.style.backgroundColor=color[i];
    colors.addEventListener('click', colorchange);
    container2.appendChild(colors);
  }
  let clearbutt=document.createElement('button');
  clearbutt.textContent='CLEAR';
  clearbutt.id='clear';
  clearbutt.addEventListener('click', colorchange);
  container2.appendChild(clearbutt);
}

gridcreate();

function clickevent(event) {
  event.target.style.backgroundColor=currentcolor;
  event.target.style.border='1px solid ' + currentcolor;
}

function colorchange (event) {
  if (event.target.textContent==='CLEAR') {
    // console.log('cleared');
    document.body.innerHTML='';
    gridcreate();
  }
  currentcolor=event.target.style.backgroundColor;
  body.style.backgroundColor=currentcolor;
}

function mousedown(event) {
  mouse = true;
  event.target.style.backgroundColor=currentcolor;
  event.target.style.border='1px solid ' + currentcolor;
}

function mouseup() {
  mouse = false;
}

function mouseover(event) {
  if (mouse === true){
    event.target.style.backgroundColor=currentcolor;
    event.target.style.border='1px solid ' + currentcolor;
  }
}
