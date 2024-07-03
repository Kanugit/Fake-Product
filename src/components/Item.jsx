
import "./Item.css";
// eslint-disable-next-line react/prop-types
const Item = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { title, price, image } = item;
  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="item-info">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Item;
