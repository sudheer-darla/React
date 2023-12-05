import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import basicOps from "./utility/basicOps";

import Categories from "./Categories";
import Productlist from "./Productlist";

function Home() {
  /***single source of truth for all the products***/
  const [products, setProducts] = useState([]);

  /************ all the categories -> a product**********/
  const [categories, setCategories] = useState([]);

  /**********Action***********/

  /*********************** state ->term with which you want to filter the product list*****************************/
  const [searchTerm, setSearchTerm] = useState("");

  /**************************sort : 0 : unsorted , 1: incresing order , -1 : decreasing order ************************************/
  const [sortDirection, setSortDirection] = useState(0);

  /**************************** currcategory : category group you result **********************************/
  const [currCategories, setCurrCategories] = useState(["All Categories"]);

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      productData.forEach((elem) => {
        console.log(elem.title);
      });

      setProducts(productData);
    })();
  }, []);

  /**************getting all the categroies ********************/
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products/categories`);
      const categoriesData = await resp.json();
      setCategories(categoriesData);
    })();
  }, []);

  let modifiedArray = basicOps(
    products,
    searchTerm,
    sortDirection,
    currCategories
  );

  return (
    <>
      <header className="nav_wrapper">
        <div className="searchSort_wrapeer">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          <div className="icon-container">
            {" "}
            <ArrowCircleUpIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setSortDirection(1);
              }}
            ></ArrowCircleUpIcon>
            <ArrowCircleDownIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => {
                setSortDirection(-1);
              }}
            ></ArrowCircleDownIcon>
          </div>
        </div>

        <div className="categories_wrapper">
          <Categories
            categories={categories}
            setCurrCategories={setCurrCategories}
          />
        </div>
      </header>

      <main className="product_wrapper">
        {/* products will be there */}
        <Productlist productList={modifiedArray} />
      </main>

      <div className="pagination">
        <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
        <ChevronRightIcon></ChevronRightIcon>
      </div>
    </>
  );
}

export default Home;
