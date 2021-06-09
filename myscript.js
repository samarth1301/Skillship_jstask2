var i=0;
var stack=[];
function push(){
    let value=document.getElementById('num').value;
    document.getElementById('num').value='';
    document.getElementById('traverse').innerHTML='';
    window.stack[window.i]=value;
    window.i++;
}
function pop(){
    window.stack.pop();
    document.getElementById('traverse').innerHTML='';
    window.i--;
}
function traverse(){
    document.getElementById('traverse').innerHTML=window.stack;
    
}