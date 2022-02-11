const addForm = document.querySelector('.add')
const ulGroup = document.querySelector('.list-group')
const list = document.querySelector('.todos')
const trash = document.querySelector('.far')
const search = document.querySelector('.search input')


addForm.addEventListener('submit', e=>{
  e.preventDefault();
  const todo = addForm.add.value.trim()
  if(todo.length>0)
  {
    generateTemplate(todo)
    addForm.add.value= ' '  
  }
  
})



const generateTemplate =todo =>{
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span> ${todo} </span>
        <i class="far fa-trash-alt delete"></i>
      </li>
      `;
    list.innerHTML += html


}

// we are useing event delegation, grabbing the event at an upperbound, then we are checking if an element within that scope has a class that contains delete, if it does we are grabbing the parent of the span which is the li tag and then removing it!

list.addEventListener('click',e=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})

const filterTodo = (term)=>{
  Array.from(list.children)
    .filter((todo) =>!todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.add('filtered'))
  Array.from(list.children)
    .filter((todo) =>todo.textContent.includes(term))
    .forEach((todo)=> todo.classList.remove('filtered'))
    
    
}

search.addEventListener('keyup', ()=>{
  let term = search.value.trim().toLowerCase()
  filterTodo(term)
})