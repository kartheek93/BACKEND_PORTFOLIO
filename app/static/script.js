window.onload = function () {
  fetch("/about")
    .then(res => res.json())
    .then(data => {
      document.getElementById("about").innerHTML = `
        <h2>About</h2>
        <img src="${data.photo_url}" width="100" />
        <h3>${data.name}</h3>
        <p>${data.bio}</p>
      `;
    });

  fetch("/projects")
    .then(res => res.json())
    .then(data => {
      const html = data.map(p => `
        <div>
          <h4>${p.title}</h4>
          <p>${p.description}</p>
          <a href="${p.github_link}" target="_blank">GitHub</a>
        </div>
      `).join('');
      document.getElementById("projects").innerHTML = `<h2>Projects</h2>${html}`;
    });

  fetch("/skills")
    .then(res => res.json())
    .then(data => {
      const html = data.map(s => `<li>${s.name}</li>`).join('');
      document.getElementById("skills").innerHTML = `<h2>Skills</h2><ul>${html}</ul>`;
    });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById("status").innerText = data.message;
        this.reset();
      });
  });
};
