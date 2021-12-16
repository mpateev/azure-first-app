import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  const value = "World";
  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`).json(),
      setData(text));
    })();
  });
  return <div>Hello {data}</div>;
}

export default App;
