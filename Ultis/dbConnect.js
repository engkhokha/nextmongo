const mongoose = require('mongoose');
export default async function dbConnect (){
try {
    await mongoose.connect('mongodb+srv://queenalshami95:khitam@cluster0.wq07wfe.mongodb.net/test' , {useUnifiedTopology:true , UseNewUrlParser:true});
    console.log('Connected successfully !')
} catch (error) {
    console.log(error)
}
}