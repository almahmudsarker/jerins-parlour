// Add a Service
export const addService = async (serviceData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceData),
  });
  const data = await response.json();
  return data;
};

// Get all services
export const getAllService = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/services`);
  const data = await response.json();
  return data;
};

// Get a single service by ID
export const getService = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/services/${id}`
  );
  const data = await response.json();
  return data; // Return the data object directly
};

//delete a Service
// export const deletePlace = async (id) => {
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${id}`, {
//     method: "DELETE",
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// };
