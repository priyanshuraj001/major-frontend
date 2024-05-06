import React from 'react';

function NameInput({ onNameSubmit, setName, name }) {
  return (
    <form onSubmit={onNameSubmit} className="space-y-4 h-screen ">
      <div className="flex flex-col items-center ">
        <label htmlFor="name" className="mb-2 capitalize text-lg font-semibold text-gray-800">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500"
          placeholder="Enter your name"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
        >
          Start Test
        </button>
      </div>
    </form>
  );
}

export default NameInput;
