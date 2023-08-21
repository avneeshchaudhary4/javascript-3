const user= new Map();
// for adding records
user.set('name' , "Avi");
user.set('age' , 25);
user.set('email' , "avi2@gmail.com");
console.log(user);
// for updating records
user.set('name' , "Avneesh");
console.log(user);
// for deleting records
user.delete('age');
console.log(user);

