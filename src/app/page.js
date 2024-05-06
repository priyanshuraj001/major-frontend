"use client"
import { useState } from 'react';
import NameInput from '../components/NameInput';
import EEGForm from '../components/EEGForm';
import ResultDisplay from '../components/ResultDisplay';

export default function Home() {
  const [formData, setFormData] = useState({
    delta: '',
    theta: '',
    alpha: '',
    beta: '',
    gamma: '',
    erp1: '',
    erp2: '',
    coherence: '',
    amplitude: '',
    asymmetry: '',
  });
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some(value => value === '')) {
      alert('Please fill all the fields.');
      return;
    }

    try {
      const response = await fetch('/api/detect-alzheimer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.result);
      setShowForm(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resetAll = () => {
    setResult('');
    setShowForm(false);
    setName('');
    setFormData({
      delta: '',
      theta: '',
      alpha: '',
      beta: '',
      gamma: '',
      erp1: '',
      erp2: '',
      coherence: '',
      amplitude: '',
      asymmetry: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Alzheimer's Detector</h1>
      {!showForm && !result && <NameInput onNameSubmit={handleNameSubmit} setName={setName} name={name} />}
      {showForm && <EEGForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />}
      {result && <ResultDisplay name={name} result={result} onReset={resetAll} />}
    </div>
  );
}
