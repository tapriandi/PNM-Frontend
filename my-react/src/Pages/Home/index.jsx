import React from "react";
import { Header, Slider } from "../../Components/Atoms";
import { ProductSection } from "../../Components/Molecules";
import { products } from "../../dummy/data";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const clickMoreTerlaris = () => {
    navigate("/products/terlaris");
  };

  const clickMoreFavorit = () => {
    navigate("/products/favorit");
  };

  return (
    <div className="px-[10%] pb-20 w-full min-h-screen">
      <div className="fixed top-0 left-0 w-full px-[10%] bg-gray-50/60">
        <Header />
      </div>
      <div className="pt-20"></div>
      <Slider />
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
