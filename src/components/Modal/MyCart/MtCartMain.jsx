import React from "react";
import Store from "../../Store/Store";

export default function MyCartMain() {

  const subtotal = Store(state => state.subtotal)
  const total = Store(state => state.total)
  const percentage = (subtotal * 100) / 200
  
  return(
    <>
      <div className="mycart__servis">
        <button className="mycart__servis-btn"><i className='bx bx-edit'></i> <br />
          Note
        </button>
        <span className="mycart__servis-span"></span>
        <button className="mycart__servis-btn"><i className='bx bxs-car'></i> <br />
          Shipping
        </button>
        <span className="mycart__servis-span"></span>
        <button className="mycart__servis-btn"><i className='bx bx-purchase-tag bx-flip-horizontal' ></i> <br />
        Cuppon</button>
      </div>

      <div className="mycart__total">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mycart__total-subtotal">Subtotal</p>
          <p className="mycart__total-subtotal">${subtotal}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mycart__total-shipping">Shipping</p>
          <p className="mycart__total-shipping">Free Shipping</p>
        </div>
      </div>

      <div className="mycart__tprice">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mycart__tprice-total">Total</p>
          <p className="mycart__tprice-total">${total}</p>
        </div>

        <div className="mycart__tprice-rangebox">
          <div style={{width: `${percentage >= 100 ? 100 : percentage}%`}} className="mycart__tprice-range">
            <span className="mycart__tprice-rangespan">{percentage >= 100 ? 100 : percentage}%</span>
          </div>
        </div>
        <p className="mycart__tprice-desc">Spend <span className="mycart__tprice-price">$118.8</span> more to reach <span className="mycart__tprice-strong">Free shipping!</span></p>
      </div>

      <button className="mycart__cartbtn">viwe cart</button>
      <button className="mycart__checkbtn">checkout</button>
    </>
  )
}