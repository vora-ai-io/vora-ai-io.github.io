function renderTools(containerId, tools) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  tools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <a href="${tool.page}" class="btn">View Tool</a>
    `;
    container.appendChild(card);
  });
}
