import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({

  // Write your schema fields here...
  
});

//Export the model
const Users = mongoose.model("User", userSchema);

export default Users;
