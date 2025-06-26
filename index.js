
const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

let books=[];
//get all books
app.get('/books',(req,res)=>{
    res.json(books);
});
//get book by id
app.get('/books/:id',(req,res)=>{
    const book=books.find(b=>b.id===parseInt(req.params.id));
    if(!book){
        return res.status(404).json({message:'Book not found'})
    }
    res.json(book);
});
//post new book(one book at a time)
app.post('/books',(req,res)=>{
    const {title,author}=req.body;

    if(!title||!author){
         return res.status(404).json({message:'Title and Author are required'})
    }
    const newBook={
        id:books.length>0?books[books.length-1].id+1:1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

//update a book by id
app.put('/books/:id',(req,res)=>{
    const bookIndex=books.findIndex(b=>b.id===parseInt(req.params.id));
    if(bookIndex===-1){
        return res.status(404).json({message:'Book not found'})
    }
    
    const {title,author}=req.body;
    
    if(!title||!author){
         return res.status(404).json({message:'Title and Author are required'})
    }
    books[bookIndex]={
        id:books[bookIndex].id,
        title,
        author
    }
    res.json(books[bookIndex])
})
//delete book by id
app.delete('/books/:id',(req,res)=>{
    const bookIndex=books.findIndex(b=>b.id===parseInt(req.params.id));
    if(bookIndex===-1){
        return res.status(404).json({message:'Book not found'})
    }
    const deletedBook=books.splice(bookIndex,1);
    res.json({message:'Book deleted successfully',
        book:deletedBook[0]
    });

 
});
//to start server 
   app.listen(PORT,()=>{
        console.log(`Book API sever running at http://localhost:${PORT}/books`)
    });