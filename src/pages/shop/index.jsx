import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMethods from "../../utils/apiMethods";
// import ShopProduct from "../../components/ShopProduct/ShopProduct";
import styles from "./shop.module.scss";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import useGetProfile from "../../hooks/profile/useGetProfile";
import { useShopContext } from "../../context/ShopContext";
import ShopCategory from "../../components/ShopCategory/ShopCategory";

function Shop() {
  const { shopId, userId } = useParams();
  // const [categories, setCategories] = useState([]);
  const { categories, setCategories } = useShopContext();

  const { data, isLoading } = useGetProfile(userId);
  const fetchCategories = () =>
    apiMethods
      .get(`/shop/${shopId}/subcategories`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res.data.data);
        setCategories(res.data.data);
        // if (res.data.success) {
        //   const categoryId = res.data.data[0].id;
        //   apiMethods.get(`/shop/${shopId}/subcategory/${categoryId}/product`).then((response) => {
        //     console.log(response);
        //   });
        // }
        // console.log(res.data.data.shop_meta.id);
      })
      .then((response) => {
        console.log(response);
      });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.shopContentWrapper}>
      {!isLoading && <ProfileHeader type="shop" data={data} />}
      <div className={styles.products}>
        {categories &&
          categories.map((category) => {
            console.log(category);
            return <ShopCategory type="category" user={userId} shop={shopId} details={category} />;
          })}
      </div>
    </div>
  );
}

export default Shop;
