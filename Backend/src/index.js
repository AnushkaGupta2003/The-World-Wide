import 'dotenv/config'
import connectDB from "./db/index.js";
import {app} from "./app.js"



connectDB()
.then(
    () => {
        app.listen(process.env.PORT || 3000 , () => {
            console.log(`Server is running on ${process.env.PORT}`);
        })
    }
)
.catch((err) => {
  console.log("MongoDB Connection Failed !!")
})

