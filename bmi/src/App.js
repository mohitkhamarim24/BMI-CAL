import { useState } from 'react';
import './tailwind.css'; // Replace App.css with Tailwind CSS

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const bmiValue = ((parseFloat(weight) / (parseFloat(height) * parseFloat(height))) * 703).toFixed(2);
      setBmi(bmiValue);
    } else {
      alert("Please enter valid weight and height values.");
    }
  };

  const reloadPage = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
  };

  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center p-10">
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold underline text-white mb-4">BMI Calculator</h1>
        <form onSubmit={calculateBMI} className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-white">Weight (lbs)</label>
            <input
              type="text"
              id="weight"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-white">Height (in)</label>
            <input
              type="text"
              id="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Calculate BMI</button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              type="button"
              onClick={reloadPage}
            >
              Reload
            </button>
          </div>
        </form>
        {bmi && (
          <div className="mt-4 text-white">
            <h2>Your BMI: {bmi}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

