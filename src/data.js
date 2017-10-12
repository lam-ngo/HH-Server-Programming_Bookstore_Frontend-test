var booklistJson = [
  '{"id":1,"title":"Title1","author":"Author1","year":2014,"isbn":"ABC123","price":10.5}',
  '{"id":2,"title":"Title2","author":"Author2","year":2015,"isbn":"DEF456","price":20.0}',
  '{"id":3,"title":"Title3","author":"Author3","year":2016,"isbn":"GHI789","price":5.0}',
  '{"id":4,"title":"Title4","author":"Author4","year":2017,"isbn":"KLM101","price":15.3}'
];

var booklist = booklistJson.map(function (book){
  return JSON.parse(book);
});

export default booklist;
