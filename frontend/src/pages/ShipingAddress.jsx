import "../styles/shipping.scss"
import { Helmet } from 'react-helmet-async'
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import CheckOutSteps from "../components/CheckOutSteps";

const ShipingAddress = () => {

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, cart: { shippingAddress } } = state;

    const [firstName, setFirsttName] = useState(shippingAddress.firstName || "")
    const [lastname, setLastName] = useState(shippingAddress.lastname || "")
    const [address, setAdress] = useState(shippingAddress.address || "")
    const [country, setCountry] = useState(shippingAddress.country || "")
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "")
    const [city, setCity] = useState(shippingAddress.city || "")
    const [district, setDistrict] = useState(shippingAddress.district || "")

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=/shipping');
        }
    }, [userInfo, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                firstName,
                lastname,
                address,
                country,
                postalCode,
                city,
                district
            },
        });
        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({
                firstName,
                lastname,
                address,
                country,
                postalCode,
                city,
                district
            })
        );
        navigate('/payment');
    };
    return (
        <div>
            <Helmet>
                <title>Shipping Address</title>
            </Helmet>
            <CheckOutSteps step1 step2 />
            <div className="shippingContainer">
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
                <hr />
                <form onSubmit={submitHandler} className="form">

                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label">First name</span>
                            <input className="field__input" type="text" value={firstName} onChange={(e) => setFirsttName(e.target.value)} />
                        </label>
                        <label className="field">
                            <span className="field__label" >Last name</span>
                            <input className="field__input" type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                        </label>
                    </div>
                    <label className="field">
                        <span className="field__label" >Address</span>
                        <input className="field__input" type="text" value={address} onChange={(e) => setAdress(e.target.value)} />
                    </label>
                    <label className="field">
                        <span className="field__label" >Country</span>
                        <select className="field__input" value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option >Turkey</option>
                        </select>
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                            <span className="field__label" >Zip code</span>
                            <input className="field__input" type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                        </label>
                        <label className="field">
                            <span className="field__label" >City</span>
                            <select className="field__input" value={city} onChange={(e) => setCity(e.target.value)} >
                                <option >Izmir</option>
                            </select>
                        </label>
                        <label className="field">
                            <span className="field__label" >District</span>
                            <select className="field__input" value={district} onChange={(e) => setDistrict(e.target.value)}>
                                <option >Kazım Dirik Mahallesi </option>
                                <option >Bayraklı</option>
                                <option >Buca</option>
                            </select>
                        </label>
                    </div>
                    <hr />
                    <button className="button" >Continue</button>
                </form>
            </div>
        </div>

    )
}

export default ShipingAddress