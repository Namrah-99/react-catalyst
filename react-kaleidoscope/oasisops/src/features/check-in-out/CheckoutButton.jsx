import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

CheckoutButton.propTypes = {
  bookingId: PropTypes.any,
};

export default CheckoutButton;
