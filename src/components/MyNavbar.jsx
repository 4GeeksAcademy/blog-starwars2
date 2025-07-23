import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../hooks/useGlobalReducer";

const MyNavbar = () => {
  const ctx = useContext(Context);
  const store = ctx?.store ?? { favorites: [] };
  const actions = ctx?.actions ?? {};

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">StarWars Blog</Link>

        <div className="dropdown ms-auto">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos ({store.favorites.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length === 0 && (
              <li><span className="dropdown-item-text text-muted">No hay favoritos</span></li>
            )}

            {store.favorites.map(f => (
              <li key={f.uid} className="d-flex align-items-center px-2">
                <Link
                  to={`/${f.type}/${f.uid}`}
                  className="dropdown-item flex-grow-1 px-0"
                >
                  {f.name}
                </Link>
                <button
                  className="btn btn-link text-danger p-0 ms-2"
                  onClick={() => actions.removeFavorite && actions.removeFavorite(f.uid)}
                  title="Quitar"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
