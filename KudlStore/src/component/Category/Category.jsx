import classes from "./Category.module.scss";
import SingleCategory from "../Single Category/SingleCategory";
// import useFetch from "../../hooks/useFetch";
// import config  from "../../config.json";

const data = [
    {
        id : 1,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100",
        title : "Staples"
    },
    {
        id : 2,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/9fbd36.jpg?q=100",
        title : "Snacks & Beverages"
    },{
        id : 3,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/ac8550.jpg?q=100",
        title : "Packaged Food"
    },
    {
        id : 4,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/7670e2.jpg?q=100",
        title : "Baby Care"
    },
    {
        id : 5,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/b7ade9.jpg?q=100",
        title : "Household Care"
    },
    {
        id : 6,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/8014b1.jpg?q=100",
        title : "Dairy & Eggs"
    },
    {
        id : 7,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/e6e0ecc56771471a.png?q=100",
        title : "Home & Kitchen"
    },
    {
        id : 8,
        image : "https://rukminim2.flixcart.com/flap/128/128/image/2cd089facd6afa5a.jpg?q=100",
        title : "Fruits & Vegitables"
    },
]

const Category = () => {

  return (
    <div className={classes.category_container}>
       <div className={classes.category_sec}>
        <div className={classes.category_title}>
            <h3>Shop By Category</h3>
        </div>
         <div className={classes.category_content}>
           {data.map(item => <SingleCategory item={item}/>)}
         </div>
       </div>
    </div>
  )
}

export default Category