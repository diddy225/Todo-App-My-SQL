let toDoList = '';

//On submit send todo to API
$('form').on('submit', function(e){
  e.preventDefault();
  let todo = $('#todo-input').val();
  
  $.ajax({
    url: '/todo',
    method: "POST",
    data: {
      item: todo
    }
  })
  .then(function(todo){
    $('#todo-input').val('');
    //display new todo on page
    let htmlStr = `<div id="todo-box"><i class="far fa-circle"></i><li id="${todo.id}" complete="${todo.complete}"><span>${todo.item}</span></li><div>`;
    $('#list').append(htmlStr);
  })
});

//get all todo's from API
$.ajax({
  url: '/todo',
  method: 'GET',
  datType: 'json',
  success: function(data) {
    useReturnData(data);
  }
});

//store todo in array
function useReturnData(data){
  toDoList=data;
  //display all todo on page
  toDoList.forEach(function(todo){
    if(!todo.complete){
      let htmlStr = `<div id="todo-box"><i class="far fa-circle"></i><li id="${todo.id}" complete="${todo.complete}"><span>${todo.item}</span></li></div>`;
      $('#list').append(htmlStr);
    } else {
      let htmlStr = `<div id="todo-box"><i class="far fa-dot-circle"></i><li id="${todo.id}" complete="${todo.complete}"><span>${todo.item}</span></li></div>`;
      $('#list').append(htmlStr);
    }
  });
};


//check todo item complete
$('#list').on('click', '.fa-circle', function(){
  let todoId = $(this).siblings('li').attr('id');

  $.ajax({
    url: `/todo/${todoId}`,
    method: 'PUT',
    data: {complete: true}
  });
    $(this).removeClass('far fa-circle');
    $(this).addClass('far fa-dot-circle');
});

//delete item if complete = true
$('#list').on('click', '.fa-dot-circle', function(){
  let todoId = $(this).siblings('li').attr('id');
  let complete = $(this).siblings('li').attr('complete');
  if(complete){
    $.ajax({
      url: `/todo/${todoId}`,
      method: 'DELETE'
    })
        window.top.location.reload();
  }
});