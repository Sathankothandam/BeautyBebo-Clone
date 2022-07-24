export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons" style={{ display: "flex",
     justifyContent: "space-around",
      padding: "10px",
      gap:"10px"
       }}>
      {/* <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} onClick={() => handleSort("title", 1)} className="sortByTitleAsc">Sort by Title Asc</button>
      <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} onClick={() => handleSort("title", -1)} className="sortByTitleDesc">Sort by Title Desc</button> */}
      <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
       
      }} onClick={() => handleSort("price", 1)} className="sortByPriceAsc">Price Low to High</button>
      <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "teal",
        border: '1px solid teal',
        color: 'white',
        cursor: 'pointer'
      }} onClick={() => handleSort("price", -1)} className="sortByPriceDesc">Price High to Low</button> 
    </div>
  );
};
