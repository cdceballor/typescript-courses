import React, { useEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import Form from "./components/Form";
// import SubList from "./components/SubList";
import { AppState, Sub } from "./interfaces/Interfaces";
const initialState = [
  {
    nick: "depelu",
    avatar: "https://i.pravatar.cc/150?u=depelu",
    subMonths: 3,
    description: "Mode",
  },
  {
    nick: "sergio",
    avatar: "https://i.pravatar.cc/150?u=sergio",
    subMonths: 7,
    description: "Mode",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const SubList = lazy(()=> import('./components/SubList'))

  useEffect(() => {
      setSubs(initialState);
  },[]);

  const handleNewSub = (newSub:Sub):void => {
    setSubs(subs=>[...subs, newSub]);
  }

  return (
    <div className="App">
      <h1> Subs </h1>
        <Suspense fallback={ <h1> Loading </h1> }>
        <SubList subs={subs} />
      </Suspense>
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
