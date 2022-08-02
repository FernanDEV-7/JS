//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos

const users = [
    {
        id:1,
        name: 'Dorian'
    },
    {
        id:2,
        name: 'Laura' 
    },
    {
        id:3,
        name: 'Carlos'
    }

]

const emails = [
    {
        id:1,
        email:'dorian@gmail.com'
    },
    {
        id:2,
        email:'laura@gmail.com'
    }
]

const getUser = (id,cb) =>{
    const user = users.find(user=>user.id == id)
    if(!user)cb(`not exist a user with id ${id}`)
    else cb(null,user)
}

getUser(4,(err,user)=>{
    if(err)return console.log(err)
    console.log(user);
})