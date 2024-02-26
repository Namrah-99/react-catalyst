import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItems } from './cartSlice';
import PropTypes from 'prop-types';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItems(pizzaId))}>
      Delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default DeleteItem;
