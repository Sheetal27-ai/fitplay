import React, { useState } from 'react';
import {
  Activity,
  User,
  Weight,
  Syringe,
  Scan,
  HeartPulse,
  MapPin,
  UtensilsCrossed,
  Home,
  Star,
  Dumbbell
} from 'lucide-react';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Page switcher
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'bmi':
        return <BmiCalculator />;
      case 'calories':
        return <CalorieCalculator />;
      case 'steps':
        return <StepCounter />;
      case 'services':
        return <NearbyServices />;
      case 'foodscan':
        return <FoodScanner />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header with Navigation */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <HeartPulse className="mr-2" />
            FitFlow
          </h1>
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`flex flex-col items-center p-2 text-sm rounded-lg transition-colors ${currentPage === 'home' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
                >
                  <Home size={20} />
                  <span className="hidden sm:inline">Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('bmi')}
                  className={`flex flex-col items-center p-2 text-sm rounded-lg transition-colors ${currentPage === 'bmi' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
                >
                  <User size={20} />
                  <span className="hidden sm:inline">BMI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('calories')}
                  className={`flex flex-col items-center p-2 text-sm rounded-lg transition-colors ${currentPage === 'calories' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
                >
                  <UtensilsCrossed size={20} />
                  <span className="hidden sm:inline">Calories</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('steps')}
                  className={`flex flex-col items-center p-2 text-sm rounded-lg transition-colors ${currentPage === 'steps' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
                >
                  <Activity size={20} />
                  <span className="hidden sm:inline">Steps</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className={`flex flex-col items-center p-2 text-sm rounded-lg transition-colors ${currentPage === 'services' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
                >
                  <MapPin size={20} />
                  <span className="hidden sm:inline">Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('foodscan')}
                  className={`flex flex-col items-center p-2 text-sm rounded-lg transition-colors ${currentPage === 'foodscan' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
                >
                  <Scan size={20} />
                  <span className="hidden sm:inline">Food Scan</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

// Home View Component
const HomeView = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
    <h2 className="text-4xl font-extrabold text-blue-600 mb-4">Welcome to FitFlow!</h2>
    <p className="text-lg text-gray-600 mb-6">Your all-in-one platform for fitness and wellness. Navigate using the menu above to get started.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        icon={<User size={48} className="text-blue-500" />}
        title="BMI Calculator"
        description="Find out your Body Mass Index."
      />
      <Card
        icon={<UtensilsCrossed size={48} className="text-green-500" />}
        title="Calorie Calculator"
        description="Estimate your daily calorie needs."
      />
      <Card
        icon={<Activity size={48} className="text-orange-500" />}
        title="Step Counter"
        description="Manually track your daily steps."
      />
      <Card
        icon={<MapPin size={48} className="text-red-500" />}
        title="Nearby Services"
        description="Find gyms, nutritionists, and doctors near you."
      />
      <Card
        icon={<Scan size={48} className="text-purple-500" />}
        title="Food Scanner"
        description="Discover the nutritional content of your food."
      />
      <Card
        icon={<HeartPulse size={48} className="text-pink-500" />}
        title="Stay Healthy"
        description="Explore new ways to improve your fitness journey."
      />
    </div>
  </div>
);

// Reusable Card Component
const Card = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-inner flex flex-col items-center text-center transition-transform hover:scale-105">
    {icon}
    <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

// BMI Calculator Component
const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatus('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
    } else {
      setBmi(null);
      setStatus('');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">BMI Calculator</h2>
      <div className="space-y-4">
        <InputField
          label="Weight (kg)"
          icon={<Weight />}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <InputField
          label="Height (cm)"
          icon={<User />}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button
          onClick={calculateBmi}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Calculate BMI
        </button>
      </div>
      {bmi && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-inner text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">Your BMI: {bmi}</h3>
          <p className={`text-lg font-semibold ${status === 'Underweight' ? 'text-orange-500' : status === 'Normal weight' ? 'text-green-600' : status === 'Overweight' ? 'text-yellow-600' : 'text-red-600'}`}>
            Status: {status}
          </p>
        </div>
      )}
    </div>
  );
};

// Calorie Calculator Component
const CalorieCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('sedentary');
  const [calories, setCalories] = useState(null);

  const activityLevels = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const calculateCalories = () => {
    if (age > 0 && weight > 0 && height > 0) {
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const tdee = Math.round(bmr * activityLevels[activity]);
      setCalories(tdee);
    } else {
      setCalories(null);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Calorie Calculator</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="font-semibold w-1/4">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <InputField label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <InputField label="Weight (kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <InputField label="Height (cm)" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        <div className="flex items-center space-x-4">
          <label className="font-semibold w-1/4">Activity Level:</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Lightly Active (1-3 days/week)</option>
            <option value="moderate">Moderately Active (3-5 days/week)</option>
            <option value="active">Active (6-7 days/week)</option>
            <option value="veryActive">Very Active (very intense daily exercise)</option>
          </select>
        </div>
        <button
          onClick={calculateCalories}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-green-700 transition-colors"
        >
          Calculate Daily Calories
        </button>
      </div>
      {calories && (
        <div className="mt-8 p-6 bg-green-50 rounded-lg shadow-inner text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Estimated Daily Calories: {calories}</h3>
          <p className="text-sm text-gray-500">This is an estimate based on your activity level.</p>
        </div>
      )}
    </div>
  );
};

// Step Counter Component
const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [stepInput, setStepInput] = useState('');

  const logSteps = () => {
    const newSteps = parseInt(stepInput, 10);
    if (!isNaN(newSteps) && newSteps > 0) {
      setSteps(steps + newSteps);
      setStepInput('');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Step Counter</h2>
      <p className="text-xl font-semibold text-center mb-4">Total Steps: {steps.toLocaleString()}</p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <InputField
          label="Log Steps"
          placeholder="Enter steps"
          type="number"
          value={stepInput}
          onChange={(e) => setStepInput(e.target.value)}
        />
        <button
          onClick={logSteps}
          className="w-full sm:w-auto bg-orange-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-orange-700 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
};

// Nearby Services Component (Simulated)
const NearbyServices = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const mockData = {
    "New York": [
      { type: 'Gym', name: 'Metro Fitness', address: '123 Wall Street', phone: '(212) 555-0100' },
      { type: 'Nutritionist', name: 'Healthy Eats Clinic', address: '45 Park Ave', phone: '(212) 555-0101' },
      { type: 'Mental Health Doctor', name: 'Mindful Wellness Center', address: '78 Broadway', phone: '(212) 555-0102' },
      { type: 'Gym', name: 'Central Park Gym', address: '200 Main St', phone: '(212) 555-0103' },
    ],
    "Los Angeles": [
      { type: 'Gym', name: 'LA Fitness Pro', address: '321 Sunset Blvd', phone: '(310) 555-0200' },
      { type: 'Nutritionist', name: 'West Coast Nutrition', address: '65 Hollywood Blvd', phone: '(310) 555-0201' },
      { type: 'Mental Health Doctor', name: 'Pacific Mind Institute', address: '98 Ocean View', phone: '(310) 555-0202' },
    ],
  };

  const searchServices = () => {
    const city = Object.keys(mockData).find(key => key.toLowerCase() === location.toLowerCase());
    if (city) {
      setResults(mockData[city]);
    } else {
      setResults([]);
    }
    setSearched(true);
  };

  const getIcon = (type) => {
    switch(type) {
      case 'Gym': return <Dumbbell className="text-indigo-500" />;
      case 'Nutritionist': return <UtensilsCrossed className="text-green-500" />;
      case 'Mental Health Doctor': return <Syringe className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Nearby Services</h2>
      <p className="text-gray-500 mb-4">
        (This is a simulation. Try entering "New York" or "Los Angeles" to see results.)
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <InputField
          label="Your Location"
          placeholder="e.g. New York, Los Angeles"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={searchServices}
          className="w-full sm:w-auto bg-indigo-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
        >
          Search
        </button>
      </div>

      {searched && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Search Results:</h3>
          {results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((service, index) => (
                <li key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4">
                    {getIcon(service.type)}
                    <div>
                      <h4 className="text-xl font-bold">{service.name}</h4>
                      <p className="text-gray-600">{service.type}</p>
                      <p className="text-gray-500 text-sm">Address: {service.address}</p>
                      <p className="text-gray-500 text-sm">Phone: {service.phone}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-500 text-center">No services found for this location.</p>
          )}
        </div>
      )}
    </div>
  );
};

// Food Scanner Component (Simulated)
const FoodScanner = () => {
  const [foodItem, setFoodItem] = useState('');
  const [nutritionalInfo, setNutritionalInfo] = useState(null);
  const [searched, setSearched] = useState(false);

  const mockData = {
    apple: { calories: 95, protein: 0.5, carbs: 25, fat: 0.3, serving: '1 medium apple' },
    banana: { calories: 105, protein: 1.3, carbs: 27, fat: 0.4, serving: '1 medium banana' },
    chickenbreast: { calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: '100g' },
    oatmeal: { calories: 150, protein: 5, carbs: 27, fat: 2.5, serving: '1/2 cup dry' },
    broccoli: { calories: 55, protein: 3.7, carbs: 11.2, fat: 0.6, serving: '1 cup chopped' },
  };

  const searchFood = () => {
    const item = foodItem.toLowerCase().replace(/\s/g, '');
    const info = mockData[item] || null;
    setNutritionalInfo(info);
    setSearched(true);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-6">Food Scanner</h2>
      <p className="text-gray-500 mb-4">
        (This is a simulation. Try typing "apple", "banana", "chicken breast", "oatmeal", or "broccoli".)
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <InputField
          label="Food Item"
          placeholder="Enter food name"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        <button
          onClick={searchFood}
          className="w-full sm:w-auto bg-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-purple-700 transition-colors"
        >
          Scan Food
        </button>
      </div>

      {searched && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Nutritional Facts:</h3>
          {nutritionalInfo ? (
            <div className="bg-purple-50 p-6 rounded-lg shadow-inner">
              <p className="text-lg font-semibold mb-2">Serving: {nutritionalInfo.serving}</p>
              <ul className="space-y-2">
                <li className="flex justify-between items-center"><span className="font-medium">Calories:</span> <span className="text-gray-700">{nutritionalInfo.calories} kcal</span></li>
                <li className="flex justify-between items-center"><span className="font-medium">Protein:</span> <span className="text-gray-700">{nutritionalInfo.protein}g</span></li>
                <li className="flex justify-between items-center"><span className="font-medium">Carbohydrates:</span> <span className="text-gray-700">{nutritionalInfo.carbs}g</span></li>
                <li className="flex justify-between items-center"><span className="font-medium">Fat:</span> <span className="text-gray-700">{nutritionalInfo.fat}g</span></li>
              </ul>
            </div>
          ) : (
            <p className="text-lg text-gray-500 text-center">Nutritional information not found.</p>
          )}
        </div>
      )}
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, icon, ...props }) => (
  <div className="flex flex-col w-full">
    <label className="mb-2 font-semibold text-gray-700">{label}</label>
    <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white focus-within:ring-2 focus-within:ring-blue-500">
      {icon && <span className="text-gray-400 mr-2">{icon}</span>}
      <input
        {...props}
        className="w-full p-1 bg-transparent border-none focus:outline-none"
      />
    </div>
  </div>
);

// This is the main export of the App component.
export default App;
