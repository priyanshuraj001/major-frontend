// components/EEGForm.js
function EEGForm({ formData, setFormData, onSubmit }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <form onSubmit={onSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="mb-2 capitalize">{key}:</label>
            <input
              type="text"
              id={key}
              name={key}
              required
              value={formData[key]}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Detect Alzheimer's
        </button>
      </form>
    );
  }
  export default EEGForm;
  