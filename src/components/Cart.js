import React from "react";
import formatCurrency from "../util";

function Cart(props) {
  const { cartItems, removeFromCart, createOrder } = props;
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  // hàm này khi nhập value thì sẽ set lại state khi được nhập vào
  const handleInput = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    }
  };

  // hàm này sẽ nhận các giá trị state khi click vào procced hoặc enter
  const createOrders = (e) => {
    e.preventDefault(); // không cho trình duyệt reload khi nhấp enter or click procced
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
    };
    // gán object vừa tạo vào props
    createOrder(order);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in the cart
        </div>
      )}
      <div className="cart">
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <div>{item.title}</div>
                <div className="right">
                  {formatCurrency(item.price)} X {item.count}&nbsp;
                  <button
                    className="button"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {cartItems.length !== 0 && (
        <div>
          <div className="cart">
            <div className="total">
              <div>
                Total:&nbsp;
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="button-primary"
              >
                Procced
              </button>
            </div>
          </div>
          {showCheckout && (
            <div>
              <div className="cart"></div>
              <form onSubmit={createOrders}>
                <ul className="form-container">
                  <li>
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={handleInput}
                    />
                  </li>
                  <li>
                    <label>Name</label>
                    <input
                      name="name"
                      type="Text"
                      required
                      onChange={handleInput}
                    />
                  </li>
                  <li>
                    <label>Address</label>
                    <input
                      name="address"
                      type="text"
                      required
                      onChange={handleInput}
                    />
                  </li>
                  <li>
                    <button className="button-primary" type="submit">
                      Checkout
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
