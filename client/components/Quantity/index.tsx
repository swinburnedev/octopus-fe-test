import { useState } from 'react';
import Button from '../Button';
import styles from './quantity.module.scss';

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
	setQuantity(quantity + 1);
  };

  const decrement = () => {
	if (quantity > 1) {
	  setQuantity(quantity - 1);
	}
  };

  return (
      <div className={styles.quantity}>
          <div>Qty</div>
          <div className={styles.quantityControl}>
              <Button disabled={quantity === 1} onClick={decrement}>
                  -
              </Button>
              <span title="Current quantity" className={styles.quantityLabel}>
                  {quantity}
              </span>
              <Button onClick={increment}>+</Button>
          </div>
      </div>
  )
}

export default Quantity;