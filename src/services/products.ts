import PocketBase from "pocketbase";
import { CONSTANTS } from "../config/constants";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

export const getProducts = async () => {
  const result = await pb.collection(CONSTANTS.PB_PRODUCT_COLLECTION).getList();
  result.items = result.items.map((item) => {
    if (item.images && Array.isArray(item.images)) {
      item.images = item.images.map((imageName) =>
        pb.files.getURL(item, imageName)
      );
    }
    item.total_features = item.feature_list
      ? item.feature_list.split(",").length
      : 0;

    return item;
  });
  return result;
};
export const getProductById = async (id: string) => {
  const result = await pb
    .collection(CONSTANTS.PB_PRODUCT_COLLECTION)
    .getOne(id);
  if (result.images && Array.isArray(result.images)) {
    result.images = result.images.map((imageName) =>
      pb.files.getURL(result, imageName)
    );
  }
  result.total_features = result.feature_list
    ? result.feature_list.split(",").length
    : 0;

  return result;
};
