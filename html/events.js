fetch('events.json')
    .then(response => response.json())
    .then(({ data }) => {
        const container = document.getElementById('liste');
        data.forEach(event => {
            const div = document.createElement('div');
            div.innerHTML = `
        <img src="${event.logo_url}" alt="" width="120" />
        <p>${event.location} - ${event.date}</p>
        <hr />
      `;
            container.appendChild(div);
        });
    })
    .catch(err => console.error('Erreur JSON :', err));
