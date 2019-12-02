var save= [];
function js (inp) {

  if(save[inp-1]===undefined)
    return collect(inp-1);
  else
    return del(inp-1);

  //Collector
  function collect ( id ) {
    save[id]=id+1;
    return alert ("Вы выбрали:" + "\n" + save.join(' '));
  }
  //Anihilator
  function del ( id ) {
    delete save[id];
    return alert ("Вы выбрали:" + "\n" + save.join(' '));
  }
}