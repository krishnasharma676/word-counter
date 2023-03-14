let textbox= document.getElementById('textbox1');

textbox.addEventListener('input',function(){
    var text=this.value ;
    // console.log(text);
    let char= text.length;
    document.getElementById('char').innerHTML=char;
    text=text.trim();
    
    let word=text.split(' ');
    let cleanList= word.filter(function(lm) {
        return lm !=""
      })
    document.getElementById('word').innerHTML=cleanList.length;

})