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
          <input
            onChange={(e) => setItemName(e.target.value)}
            type="text"
            placeholder="e.g. eggs"
          />
          <button>click</button>
        </form>
      </section>
      <section>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button>edit</button>
              <button>delete</button>
            </li>
          );
        })}
        <button>clear list</button>
      </section>
    </main>
  );
}

export default App;
