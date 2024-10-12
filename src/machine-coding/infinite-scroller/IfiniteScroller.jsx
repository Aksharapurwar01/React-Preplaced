import React, { useState, useEffect } from "react";

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchItems = (pageNumber) => {
    return new Array(20)
      .fill(0)
      .map((_, idx) => `Item ${(pageNumber - 1) * 20 + idx + 1}`);
  };

  const loadMoreItems = () => {
    if (!loading) {
      setLoading(true);
      const newItems = fetchItems(page);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreItems();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Infinite Scroll Example</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {loading && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
