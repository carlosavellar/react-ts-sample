import React from "react";
import CartCss from "./Cart.module.css";
import { AppStateContext } from "./AppState";
interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleOpenCart = this.handleOpenCart.bind(this);
  }

  handleOpenCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    if ((e.currentTarget as HTMLElement).nodeName !== "button") {
      console.log(e.currentTarget);
    }
  }
  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          return (
            <div className={CartCss.cartContainer}>
              <button
                className={CartCss.button}
                type="button"
                onClick={this.handleOpenCart}
              >
                <span>{state.cart.items.length} pizzas</span>
              </button>
              {!this.state.isOpen ? null : (
                <div
                  className={CartCss.cartDropDown}
                  style={{
                    display: this.state.isOpen === true ? "block" : "none",
                  }}
                >
                  <ul>
                    <li>Marguerita</li>
                    <li>Alemã</li>
                  </ul>
                </div>
              )}
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
