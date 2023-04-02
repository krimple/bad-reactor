import React, { useEffect, useState } from 'react'
import './App.css'

type AccountResponse = {
  name?: string
};

function DemoBadFCP() {
  const [account , setAccount] = useState<AccountResponse>();

  useEffect(() => {
    (async() => {
      const res = await fetch('/api/account');
      const json = await res.json();
      setAccount(json);
    })();
  }, []);

  return (
    <div className="App">
      { account &&  account.name }
    </div>
  )
}

export default DemoBadFCP;
