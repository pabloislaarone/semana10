import Card from './components/Card';

function App() {
  return (
    <main className="main-container">
      <h1 className="title">CineSpoilerS 🎬</h1>
      
      <div className="cards-container">

        <Card title="Pablo Isla" description="Frontend Developer" />
        <Card title="Fe" description="Musician" />
      </div>
    </main>
  );
}

export default App;