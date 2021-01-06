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
      <div>
        <h1>get it done</h1>
      </div>
      <section>
        <form onSubmit={handleSubmit} action="">
          <div className="input-container">
            <input
              onChange={(e) => setItemName(e.target.value)}
              type="text"
              placeholder="e.g. eggs"
            />
            <button>submit</button>
          </div>
        </form>
      </section>
      <section>
        {list.map((item, index) => {
          return (
            <div className="item-container" key={index}>
              <li>{item}</li>
              <div className="btn-container">
                <button>edit</button>
                <button>delete</button>
              </div>
            </div>
          );
        })}
        <button id="btn-clear">clear list</button>
      </section>
    </main>
  );
}

export default App;
