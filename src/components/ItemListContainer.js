import React,{useState,useEffect} from 'react';
import '../index.css';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { category: productCategory } = useParams();

  useEffect(() => {
    const getProducts = async () => {

      try {
        const { docs } = await getFirestore().collection("serverData").get();
        const newArray = await docs.map((item) => ({ id: item.id, ...item.data() }));

        if (productCategory) {
          const filterCategory = await newArray.filter(
            (item) => item.category === productCategory
          );
          setProduct(filterCategory);
        } else {
          setProduct(newArray);
        }
      } catch (e) { console.log(e) }
    };
    getProducts();
  }, [productCategory]);

    return (
        <div>
          
        <ItemList
        productos={product}/>
        </div>
    )
}
export default ItemListContainer;