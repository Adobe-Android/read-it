$('#search-button').click(function(){
  // console.log("Got clicked")
  let search = $('#search').val();
  let queryString = `/search-books?title=${search}`;
  window.location.href = queryString;
})

$('.add-button').click(function(){
  console.log("Got clicked")
  let book_id = $(this).attr('id');
  console.log(book_id);
  $.ajax({
    type: "POST",
    url: `/add-book/${book_id}`,
  })
});

