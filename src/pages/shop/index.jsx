import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMethods from "../../utils/apiMethods";
// import ShopProduct from "../../components/ShopProduct/ShopProduct";
import styles from "./shop.module.scss";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import useGetProfile from "../../hooks/profile/useGetProfile";
import { useShopContext } from "../../context/ShopContext";
// import ShopCategory from "../../components/ShopCategory/ShopCategory";
import ShopProduct from "../../components/ShopProduct/ShopProduct";

function Shop() {
  const { shopId, userId } = useParams();
  // const [categories, setCategories] = useState([]);
  const { categories, setCategories } = useShopContext();
  // const navigate = useNavigate();

  const routeToCategoryPage = (id) => {
    // navigate(`/profile/${userId}/shop/${shopId}/category/${id}`);
    console.log(id);
  };

  const categoryRoute = `/profile/${userId}/shop/${shopId}/category`;
  const { data, isLoading } = useGetProfile(userId);
  const fetchCategories = () =>
    apiMethods
      .get(`/shop/${shopId}/subcategories`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res);
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
            return (
              <ShopProduct
                type="category"
                profileOwner={userId}
                shop={shopId}
                details={category}
                clicker={(id) => routeToCategoryPage(id)}
                link={categoryRoute}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Shop;
