import ProductsModel from "../models/products.models.js";
import myConnect from "../config/dbConnect.js";

const getProductsServices = () => {
  myConnect();
  return ProductsModel.find().then((result) => {
    return result;
  });
};

const postProductService = (productObject) => {
  myConnect();
  const product = new ProductsModel(productObject);
  product
    .save()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      res.status(500).json({ mensaje: "no se guardo la información" });
    });
};

export { getProductsServices, postProductService };
