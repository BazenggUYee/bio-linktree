fetch("data/links.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("links");
    data.links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.className = "link-item";
      a.textContent = link.title;
      a.target = "_blank";
      container.appendChild(a);
    });
  });
