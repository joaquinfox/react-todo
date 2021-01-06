import React, { useState } from 'react';
function App() {
  const [itemName, setItemName] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, itemName]);
  };
  return (
    <main>
      <section>
        <form onSubmit={handleSubmit} action="">
          <input onChange={(e) => setItemName(e.target.value)} type="text" />
          <button>click</button>
        </form>
      </section>
      <section>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </section>
    </main>
  );
}

export default App;
