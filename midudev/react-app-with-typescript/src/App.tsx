import React, { useEffect, useState, Suspense, lazy, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import { FormInitialState } from "./consts/conts";
// import SubList from "./components/SubList";
import { AppState, FetchPeople, Sub } from "./interfaces/Interfaces";

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const SubList = lazy(()=> import('./components/SubList'))
  const divRef = useRef<HTMLDivElement>(null); //Initialize with null

  useEffect(() => {
    const fetchSub = ():Promise<FetchPeople> => {
      return fetch('http://localhost:3001/users').then(res => res.json());
    }
    
    fetchSub().then(sub => setSubs(sub));
  }, []);

  const handleNewSub = (newSub:Sub):void => {
    setSubs(subs=>[...subs, newSub]);
  }

  return (
    <div className="App" ref={divRef}>
      <h1> Subs </h1>
        <Suspense fallback={ <h1> Loading </h1> }>
        <SubList subs={subs} />
      </Suspense>
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
