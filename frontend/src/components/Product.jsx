import { useContext } from 'react'
import { Store } from '../Store';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = ({ item }) => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state
    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === item._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (item.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity: 1 },
            payload: { ...item, quantity },
        });
        console.log(item.countInStock -= 1)
    };

    return (
        <div className='deneme'>
            <div className='product'>
                <div className="circle"></div>
                <img src={item.image} alt="" />
                <div className="info">
                    <span onClick={addToCartHandler} className='icon-container'><AiOutlineShoppingCart className='product-icon' /></span>
                    <Link to={`/products/${item.category}/${item.slug}`} >
                        <span className='icon-container'><AiOutlineSearch className='product-icon' /></span>
                    </Link>
                    <span className='icon-container'><MdOutlineFavoriteBorder className='product-icon' /></span>
                </div>
            </div>
            <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='price'>{item.price}₺</div>
            </div>
        </div>
    )
}

export default Product