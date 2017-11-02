$('#search-button').click(function(){
  console.log("Got clicked")
  let search = $('#search').val()
  let queryString = `/search-books?title=${search}`
  window.location.href = queryString;
})