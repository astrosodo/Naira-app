function searchMusic() {
  const query = document.getElementById('searchBox').value;
  const results = document.getElementById('results');
  results.innerHTML = '';

  const musicSources = [
    { name: "Jamendo", link: `https://www.jamendo.com/search?q=${query}` },
    { name: "FreeMusicArchive", link: `https://freemusicarchive.org/search/?quicksearch=${query}` },
    { name: "Audius", link: `https://audius.co/search/all/${query}` }
  ];

  musicSources.forEach(source => {
    const div = document.createElement('div');
    div.className = 'music-card';
    div.innerHTML = `<h3>${source.name}</h3><a href="${source.link}" target="_blank">🔗 استمع أو حمل من ${source.name}</a>`;
    results.appendChild(div);
  });
}
