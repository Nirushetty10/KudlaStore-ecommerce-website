import React, { useState } from 'react';
import classes from "./Product.module.scss";
import AddIcon from '@mui/icons-material/Add';
import AdminProductList from '../AdminProductList/AdminProductList';

const Product = () => {
    const [url, setUrl] = useState("/");
    const [search, setSearch] = useState("");
    const [selectValue, setSelectValue] = useState("/");

    const handleSearch = (value) => {
        setSearch(value)
        if(search.length > 0) {
            setUrl(`/searchApi?letter=${search}`)
        } else {
            setUrl("/")
        }
    }

  return (
    <div className={classes.product_layout}>
        <div className={classes.top_heading}>
            <h2>Products</h2>
            <button><AddIcon /> Create New Product</button>
        </div>
        <div className={classes.product_layout}>
            <div className={classes.product_layout_topSec}>
                <input type="text" name="" id="" placeholder='Search' onChange={(e)=>handleSearch(e.target.value)}/>
                <select name="" id="" value={url} onChange={(e)=> setUrl(e.target.value)}>
                    <option value="/">All Product</option>
                    <option value="/allbestseller">Best Seller</option>
                    <option value="/alltoprated">Top Rated</option>
                </select>
            </div>
            <div className={classes.product_layout_listSec}>
                <AdminProductList url={url}/>
            </div>
        </div>
    </div>
  )
}

export default Product