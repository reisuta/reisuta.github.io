'use strict'

{

  const target = document.getElementsByClassName('target')[0];
  // ul要素を取得
  const value = document.getElementsByClassName('value')[0];
  // 入力された値を取得
  const add = document.getElementsByClassName('add')[0];
// 　登録ボタン

add.addEventListener('click', () => {
  
  const li = document.createElement('li');
  li.textContent = value.value;
  target.appendChild(li);
  value.value = '';
  

  function remain(){

    const ul = target.childElementCount
    const remain = document.getElementById('remain');
    remain.innerHTML ="残タスク" + ul;
    
  }

  remain();
  
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.textContent = '削除';
  li.appendChild(removeButton)
  
  
  removeButton.addEventListener('click', () => {
    
    target.removeChild(li);
    remain();
  }
  );
  
  const solveButton = document.createElement('button');
  solveButton.classList.add('solve');
  solveButton.textContent = '終了';
  li.appendChild(solveButton)
  
  solveButton.addEventListener('click', () => {
    li.classList.add('lisolve');
    
  })
  
});





value.addEventListener('keypress', (e) => {
  
  if (e.keyCode === 13){
    
    add.click();
  }
  
  
});



}