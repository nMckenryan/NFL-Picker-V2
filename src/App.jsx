import React from "react";
import Spinner from "./components/Spinner";
import firebase from "./upload-script/firebase";
import { Layout, PageHeader } from "antd";
import "./style/style.less";

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
    <div className="App">
      <Layout>
        <PageHeader
          className="site-page-header"
          title="NFL Team Picker"
          subTitle="Can't decide on a team to start with? Spin to choose your new favorite team"
        />
        <Spinner teamArray={teams} />
      </Layout>
    </div>
  );
}

export default App;
