import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App h-screen flex flex-col items-center gap-6 bg-slate-600 text-white">
      <div className="text-5xl font-extrabold mt-4">Pop up Modal</div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-violet-500 px-4 py-2 rounded-lg text-lg"
      >
        Open Modal
      </button>
      {showModal && <Modal onClose={ ()=>setShowModal(false)} />}
    </div>
  );
}

export default App;
