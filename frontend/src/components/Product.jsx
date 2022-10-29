import { useContext } from 'react'
import { Store } from '../Store';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { Link } from 'react-router-dom'

const Product = ({ item }) => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const addToCartHandler = () => {
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity: 1 },
        });
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