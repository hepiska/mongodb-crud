
var MongoClient = require('mongodb').MongoClient
// Connection URL
var url = 'mongodb://localhost:27017/library';
module.exports ={
  insertData : function(req,res){
     MongoClient.connect(url,function(err,db){
        if (err) {
          res.send(err)
        } else {
          db.collection('books').insertOne({
            'isbn':req.body.isbn,
            'title':req.body.title,
            'author':req.body.author,
            'category':req.body.category
          },function(err,result){
            if (err) {
              res.send(err)
            } else {
              res.send('data inserted')
            }
          })
        }

     })
  },
  viewData:function(req,res){
    MongoClient.connect(url,function(err,db){
      if (err) {
        res.send(err)
      } else {
        db.collection('books').find().toArray(function(err,data){
          res.send(data)
        })


      //})
      }
    })
  }


}
