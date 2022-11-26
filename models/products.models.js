import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID: { type: String, require: true },
    name: { type: String, require: true, max: 100 },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    thumbnail: { type: String, require: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("col_products", userSchema);

export default UserModel;
