import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const apiMap = { people: "people", vehicles: "vehicles", planets: "planets" };
const imgMap = { people: "characters", vehicles: "vehicles", planets: "planets" };

const Single = () => {
  const { type, uid } = useParams();                  // /:type/:uid
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(
    `https://starwars-visualguide.com/assets/img/${imgMap[type]}/${uid}.jpg`
  );

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://www.swapi.tech/api/${apiMap[type]}/${uid}`);
        const json = await res.json();
        setData(json.result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [type, uid]);

  if (loading) return <div className="container text-light my-5">Cargando...</div>;
  if (!data) return <div className="container text-light my-5">No encontrado</div>;

  const props = data.properties || {};

  return (
    <Container className="my-4 text-light">
      <Row>
        <Col md={4}>
          <img
            src={imgSrc}
            alt={props.name}
            className="img-fluid"
            loading="lazy"
            onError={() => setImgSrc("/fallback.jpg")} 
          />
        </Col>
        <Col md={8}>
          <h1>{props.name}</h1>
          <p className="lead">{data.description || "Sin descripción disponible."}</p>

          <Card bg="dark" text="light" className="mt-4">
            <Card.Body>
              {Object.entries(props).map(([k, v]) => (
                <div key={k} className="d-flex justify-content-between border-bottom py-1">
                  <strong>{k}</strong>
                  <span>{String(v)}</span>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Button as={Link} to="/" variant="primary" className="mt-3">
            Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Single;