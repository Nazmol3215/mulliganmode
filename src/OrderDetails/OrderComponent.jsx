import React, { useState } from 'react';




const OrderComponent = () => {
    const unitPrice = 999; // price per pillow
    const [quantity, setQuantity] = useState(3);
    const subtotal = (unitPrice * quantity).toFixed(2);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container my-4">
            <div className="row">
                {/* Product Summary */}
                <div className="col-md-4 mb-4">
                    <div className="product-summary p-3 border rounded">
                        <h3>
                            Lumbar Support Pillow × <span>{quantity}</span>
                        </h3>
                        <div className="quantity d-flex align-items-center mb-3">
                            <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
                            <input
                                type="text"
                                value={quantity}
                                className="form-control mx-2 text-center"
                                readOnly
                                style={{ width: '50px' }}
                            />
                            <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
                        </div>
                        <p className="price fs-5">৳ <span>{subtotal}</span></p>
                    </div>
                </div>
                {/* Billing Details */}
                <div className="col-md-4 mb-4">
                    <div className="billing-details p-3 border rounded">
                        <h3>Billing details</h3>
                        <form>
                            <label className="form-label">আপনার নাম লিখুন *</label>
                            <input type="text" className="form-control mb-3" placeholder="আপনার নাম" required />

                            <label className="form-label">মোবাইল নাম্বার লিখুন *</label>
                            <input type="text" className="form-control mb-3" placeholder="মোবাইল নাম্বার" required />

                            <label className="form-label">আপনার ঠিকানা লিখুন *</label>
                            <input type="text" className="form-control mb-3" placeholder="বাসা নং, রোড নং, থানা, জেলা" required />

                            <button type="submit" className="btn btn-warning w-100">
                                Place Order ৳ <span>{subtotal}</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="col-md-4 mb-4">
                    <div className="order-summary p-3 border rounded">
                        <h3>Your order</h3>
                        <p>Product: Lumbar Support Pillow × <span>{quantity}</span></p>
                        <p>Subtotal: ৳ <span>{subtotal}</span></p>
                        <p>Shipping: <strong>ডেলিভারি চার্জ ফ্রি</strong></p>
                        <p>Total: ৳ <span>{subtotal}</span></p>
                        <p>Cash on delivery: Pay with cash upon delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComponent;

