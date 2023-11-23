const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const projectList = document.getElementById('tbody');

let dataPro;
if(localStorage.User != null){
    dataPro = JSON.parse(localStorage.User);
}else{
    dataPro = [];
}
console.log('ddddddddddddd')
submit.onclick = function(){
    let newUser = {
        username:username.value,
        password:password.value,
    }
    dataPro.push(newUser);
    localStorage.setItem('User', JSON.stringify(dataPro));
    username.value = '';
    password.value = '';
}

function showData(){
  let table = '';
  for(let i = 0;i < dataPro.length;i++){
      if(dataPro[i].username.includes(value)){
          table +=`
          <tr>
              <td>${i}</td>
              <td>${dataPro[i].username}</td>
              <td>${dataPro[i].password}</td>
              <td><button id="deleat" onclick='deleat()'>Deleat</button></td>
          </tr>`;
      }
  }
  document.getElementById('tbody').innerHTML = table;
}

showData()
function searchUser(value){
  let table = '';
  for(let i = 0;i < dataPro.length;i++){
      if(dataPro[i].username.includes(value)){
          table +=`
          <tr>
              <td>${i}</td>
              <td>${dataPro[i].username}</td>
              <td>${dataPro[i].password}</td>
              <td><button id="deleat" onclick='deleat()'>Deleat</button></td>
          </tr>`;
      }
  }
  document.getElementById('tbody').innerHTML = table;
}

function deleat(){
    for(let i = 0;i < dataPro.length;i++){
        console.log(i);
    }
}



card_cart.innerHTML += `
        div class="image">
            ${img.innerHTML}
        </div>
        <div class="products_text">
            <h2>${brand.innerText}</h2>
            <p>${paragraph.innerText}</p>
            <h3>${price.innerText}</h3>
        
    `
