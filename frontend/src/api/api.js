const apiRequests = {
  getAllWeigts: async () => {
    const res = await fetch("http://localhost:3001/api/weights", {
      credentials: "include",
    });
    const data = await res.json();

    console.log(data);
    return data;
  },
  getAllCalories: async () => {
    const res = await fetch("http://localhost:3001/api/weights", {
      credentials: "include",
    });
    const data = await res.json();

    console.log(data);
    return data;
  },
};

export default apiRequests;
