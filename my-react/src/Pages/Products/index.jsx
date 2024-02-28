import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../../Components/Atoms";
import { useNavigate } from "react-router-dom";

export default function index() {
  const [products, setProducts] = useState([]);

  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const getProducts = useCallback(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div className="py-20 px-[10%]">
      <h1 className="pb-10 text-xl font-bold">All Products</h1>

      <div className="grid grid-cols-6 gap-4">
        {products.map((item, idx) => (
          <Card key={idx} image={item.image} diKlik={() => handleClick(item.id)} />
        ))}
      </div>
    </div>
  );
}
