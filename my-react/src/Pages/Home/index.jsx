import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Slider } from "../../Components/Atoms";
import { ProductSection } from "../../Components/Molecules";
import useCustomHook from "../../Hooks/customHook";

export default function Home() {
  let navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const { value, handleChange } = useCustomHook(10);

  const clickMoreTerlaris = () => {
    navigate("/products/terlaris");
  };

  const clickMoreFavorit = () => {
    navigate("/products/favorit");
  };

  return (
    <div className="px-[10%] pb-20 w-full min-h-screen">
      <div className="pt-32"></div>
      <Slider />

      <div>{value}</div>
      <Button title="Ini Button 30" onClick={() => handleChange(30)} />


      <ProductSection
        titleSection="Produk Terlaris"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreTerlaris()}
      />
      <ProductSection
        titleSection="Produk Favorit"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreFavorit()}
      />
    </div>
  );
}
