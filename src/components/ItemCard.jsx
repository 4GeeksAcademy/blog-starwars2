import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../hooks/useGlobalReducer";

const folderMap = { people: "characters", vehicles: "vehicles", planets: "planets" };
const getImageUrl = (type, uid) =>
  `https://starwars-visualguide.com/assets/img/${folderMap[type]}/${uid}.jpg`;

const ItemCard = ({ item, type }) => {
  const { store, actions } = useContext(Context);
  const isFav = store.favorites.some(f => f.uid === item.uid);

  const [imgSrc, setImgSrc] = useState(getImageUrl(type, item.uid));

  return (
    <Card bg="dark" text="light" className="me-3" style={{ minWidth: "18rem" }}>
      <Card.Img
        variant="top"
        src={imgSrc}
        alt={item.name}
        loading="lazy"
        onError={() => setImgSrc("/fallback.jpg")}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <div className="d-flex justify-content-between">
          <Link to={`/${type}/${item.uid}`} className="btn btn-outline-primary btn-sm">
            Ver más
          </Link>
          <Button
            variant={isFav ? "danger" : "outline-warning"}
            size="sm"
            onClick={() =>
              isFav
                ? actions.removeFavorite(item.uid)
                : actions.addFavorite({ ...item, type })
            }
          >
            {isFav ? "Quitar" : "❤️"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
