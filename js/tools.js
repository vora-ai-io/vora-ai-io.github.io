const tools = [
  { name: "ChatGPT", desc: "Conversational AI assistant" },
  { name: "Midjourney", desc: "AI image generation" },
  { name: "Notion AI", desc: "AI productivity workspace" },
  { name: "Copilot", desc: "AI coding assistant" },
  { name: "Runway", desc: "AI video generation" }
];

const grid = document.getElementById("toolsGrid");

tools.forEach(tool => {
  const div = document.createElement("div");
  div.className = "tool-card";
  div.innerHTML = `<h3>${tool.name}</h3><p>${tool.desc}</p>`;
  grid.appendChild(div);
});
