// components/ResultDisplay.js
function ResultDisplay({ name, result, onReset }) {
    return (
      <div className="result-display flex flex-col items-center justify-center h-screen">
        <p className="text-4xl font-semibold mb-6">
          Result for {name}: {result === '1' ? 'Healthy' : 'Alzheimer\'s'}
        </p>
        <button onClick={onReset} className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300">
          Restart Test
        </button>
      </div>
    );
  }
  export default ResultDisplay;
  