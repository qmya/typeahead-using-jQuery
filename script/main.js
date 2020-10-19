$(document).ready(function(){
  $('#search').keyup(function(){
    $('#result').html('');
    var searchField = $('#search').val();
    console.log(searchField);
    var expression = new RegExp(searchField, 'i');
    console.log(expression);
    $.getJSON('./jsonserver/db.json',function(data){
      $.each(data, function(key,value){
        if(value.name.search(expression) != -1)
        {
          $('#result').append('<li> value.name </li>');
        }
      })
    })
  })
})
