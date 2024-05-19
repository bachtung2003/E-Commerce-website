import React, { useState } from "react";
import "./css/Products.css";
import banner_img from "../Components/Assets/img/shopping-banner.jpeg";
import grid from "../Components/Assets/img/grid-outline.png";
import list from "../Components/Assets/img/list.png";
import data from "../Components/Assets/Product/all_product";
import ProductCards from "../Components/ProductCard/ProductCards";
import Pagination from "../Components/Pagination/Pagination";
import {Search} from "../Components/SearchBar/Search";
import ProductCategory from "../Components/ProductCategory/ProductCategory";

const showResult = "Showing 01-09 of 10 Result";

const Products = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(data);
  console.log(products);

  //  pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //  function to change current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //  filter products based on category
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const menuItems =[...new Set(data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setProducts(newItem);
  }

  return (
    <div className="products">
      <div className="container">
        <div className="left-box">
          <aside>
            <Search products={products} gridList={gridList}/>
            <ProductCategory
            filterItem={filterItem}
            setItem={setProducts}
            menuItems={menuItems}
            setProducts={setProducts}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />
          </aside>
        </div>
        <div className="right-box">
          <article>
            {/* layout and title */}
            <div className="shop-title">
              <p>{showResult}</p>
              <div
                className={`product-view-mode ${
                  gridList ? "gridActive" : "listActive"
                }`}
                id="prod-view-mode-board"
              >
                <a className="grid" onClick={() => setGridList(!gridList)}>
                  <img src={grid} />
                </a>
                <a className="list" onClick={() => setGridList(!gridList)}>
                  <img src={list} />
                </a>
              </div>
            </div>

            {/* product cards */}
            <div>
              <ProductCards gridList={gridList} products={currentProducts} />
            </div>

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              activePage={currentPage}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Products;
