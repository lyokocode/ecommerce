import "../styles/checkOutSteps.scss"

const CheckOutSteps = (props) => {
    return (
        <div>
            <div className="breadcrumb">
                <a className={props.step1 ? "active" : ""}>
                    <span className="breadcrumb__inner">
                        <span className="breadcrumb__title">Sign-in</span>
                    </span>
                </a>
                <a className={props.step2 ? "active" : ""}>
                    <span className="breadcrumb__inner" style={{ textAlign: "left" }}>
                        <span className="breadcrumb__title"> Shipping</span>
                    </span>
                </a>
                <a className={props.step3 ? "active" : ""}>
                    <span className="breadcrumb__inner">
                        <span className="breadcrumb__title">Payment</span>
                    </span>
                </a>
                <a className={props.step4 ? "active" : ""}>
                    <span className="breadcrumb__inner">
                        <span className="breadcrumb__title">Place Order</span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default CheckOutSteps