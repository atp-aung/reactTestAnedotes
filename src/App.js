import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const rda = () => Math.floor(Math.random() * 8);
  const ar = Array(8).fill(0);

  const [selected, setSelected] = useState(rda);
  const [ars, setArs] = useState(ar);

  const btnVote = (ind) => {
    const arupd = () => {
      const updVote = ars[ind] + 1;
      const cpyArs = [...ars];
      cpyArs[ind] = updVote;
      setArs(cpyArs);
    };
    return arupd;
  };

  const nextAne = () => {
    setSelected(rda);
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <p>has {ars[selected]} votes</p>
      <button onClick={btnVote(selected)}>vote</button>
      <button onClick={nextAne}>next anecdotes</button>
    </>
  );
};

export default App;
