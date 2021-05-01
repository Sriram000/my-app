import UnitPrice from './cart';
import Discounts from './cart';
import Taxes from './cart';
import LineItems from './cart';
import getDiscountPercent from './cart';
import getTaxPercent from './cart';
import getItemPrice from './cart';
import getLineItemPrice from './cart';
import getSum from './cart';

//const { people } = UnitPrice;
// const { people } = Discounts;
// const { people } = Taxes;
const Itemno = (lineItems) => {
  return (
    <div
      style={{
        background: lineItems.color,
        border: "1px solid black",
      }}
      >
       { lineItems.item } : { lineItems.units }.
      </div>
  )
}

const { LineItems } = item;

 const line = (items) => items.map(Itemno);

const CartReact = () => {
  return (
    <div className="CartReact">
     { line(LineItems)}
    </div>
  );
}

export default CartReact;
