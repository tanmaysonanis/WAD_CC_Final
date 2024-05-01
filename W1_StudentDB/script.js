const data = {
    "Name": "John Doe",
    "Roll_No": 123,
    "WAD_Marks": 90,
    "CC_Marks": 85,
    "DSBDA_Marks": 88,
    "CNS_Marks": 92,
    "AI_Marks": 95
  };
  
  fetch('http://localhost:8080/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });