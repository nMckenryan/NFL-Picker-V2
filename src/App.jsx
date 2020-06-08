import React from "react";
import Spinner from "./components/Spinner";
import { Container, Col, Button, Row } from "react-bootstrap";
import firebase from "./upload-script/firebase";

function App() {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    console.log("Retrieving data from Firestore... ");
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("teams").get();
      setTeams(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      ); //last bit retrieves id data form snapshot.
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>NFL Team Picker</h3>
          <h5>
            Can't decide on a team to start with? Spin to choose your new
            Favorite!
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* {console.log("ASSIGNED TEAMSS" + this.teams[1])} */}
          <Spinner teamArray={teams} />
          <Button
            variant="warning"
            size="lg"
            id="spinButton"
            href="#carouselExample"
          >
            SPIN
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
