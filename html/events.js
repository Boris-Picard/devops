fetch('events.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('liste');
    data.forEach(event => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${event.logo}" alt="${event.nom}" width="120" />
        <h2>${event.nom}</h2>
        <p>${event.lieu} - ${event.date}</p>
        <hr />
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Erreur JSON :', err));
