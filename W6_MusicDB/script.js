const data = {

    "Songname" : "Lahore", 
    "Film" : "MyFilm", 
    "Music_director" : "Tanmay", 
    "singer" : "Guru Randhawa"
    
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