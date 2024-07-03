import { useState, useEffect } from "react";
import Item from "./Item";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [currentPage]);

  const fetchItems = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products?_page=${currentPage}&_limit=10`
    );
    const data = await response.json();

    setItems([...items, ...data]);

    setHasMore(data.length > 0);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    setSortCriteria(e.target.value);
    setCurrentPage(1);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortCriteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        sortCriteria={sortCriteria}
        handleSort={handleSort}
      />

      <div className="item-list">
        <div className="items">
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        {hasMore && (
          <div className="load-more">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ItemList;
