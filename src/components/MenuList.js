const MenuList = (cardInfo) => {
  if (
    cardInfo?.cardInfo?.card?.card?.title &&
    cardInfo?.cardInfo?.card?.card?.title != "Top Picks"
  ) {
    const { itemCards } = cardInfo?.cardInfo?.card?.card;

    return (
      <div className="menulist-container">
        <h4>{cardInfo?.cardInfo?.card.card.title}</h4>
        <ul>
          {itemCards.map((item) => {
            return <li>{item?.card?.info?.name}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default MenuList;
