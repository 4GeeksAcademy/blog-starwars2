import React, { useContext, useEffect } from "react";
import { Context } from "../hooks/useGlobalReducer";
import CardList from "../components/CardList";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPeople();
    actions.loadVehicles();
    actions.loadPlanets();
  }, []);

  return (
    <div className="container my-4 text-light">
      <h2>People</h2>
      <CardList items={store.people} type="people" />

      <h2 className="mt-5">Vehicles</h2>
      <CardList items={store.vehicles} type="vehicles" />

      <h2 className="mt-5">Planets</h2>
      <CardList items={store.planets} type="planets" />
    </div>
  );
};

export default Home;
