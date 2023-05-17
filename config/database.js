const mongoose = require ('mongoose');

async function main(){
    await mongoose.connect(process.env.DATABASE_URL);
console.log('connected to mongodb atlas')
}

main().catch(err => console.log(err));


