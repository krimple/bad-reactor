import React, { useEffect, useState } from 'react'
import './App.css'

type AccountResponse = {
  name?: string
};

function App() {
  const [account , setAccount] = useState<AccountResponse>();

  useEffect(() => {
    (async() => {
      const res = await fetch('/api/account');
      const json = await res.json();
      setAccount(json);
    })();
  }, []);

  const suspenseRenderer = () => <p>WAITING...</p>;
  return (
    <div className="App">
      { account &&  account.name }
      { !account && <p>LOADING...</p>}
      {/* <React.Suspense fallback={suspenseRenderer()}>
        { account?.name }
      </React.Suspense> */}
    </div>
  )
}

export default App
