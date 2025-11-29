const form = document.querySelector('#snippetForm');
const container = document.querySelector('#snippetsContainer');
const searchInput = document.querySelector('#searchInput');
const exportBtn = document.querySelector('#exportBtn');
const importInput = document.querySelector('#importInput');
const exportFormat = document.querySelector('#exportFormat');

let snippets = JSON.parse(localStorage.getItem("snippets")) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const language = document.querySelector('#language').value;
  const description = document.querySelector('#description').value;
  const code = document.querySelector('#code').value;
  const imageFile = document.querySelector('#imageInput').files[0];

  if (imageFile) {
    if (imageFile.size > 512 * 1024) {
      alert("Please upload an image smaller than 512KB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      const snippet = { title, language, description, code, image: reader.result };
      saveSnippet(snippet);
    };
    reader.readAsDataURL(imageFile);
  } else {
    const snippet = { title, language, description, code, image: null };
    saveSnippet(snippet);
  }

  form.reset();
});

function saveSnippet(snippet) {
  snippets.push(snippet);
  localStorage.setItem("snippets", JSON.stringify(snippets));
  renderSnippets();
}

function deleteSnippet(index) {
  if (confirm("Are you sure you want to delete this snippet?")) {
    snippets.splice(index, 1);
    localStorage.setItem("snippets", JSON.stringify(snippets));
    renderSnippets();
  }
}

function renderSnippets(search = '') {
  container.innerHTML = '';

  snippets
    .filter(snippet =>
      snippet.title.toLowerCase().includes(search) ||
      snippet.language.toLowerCase().includes(search)
    )
    .forEach((snippet, index) => {
      const card = document.createElement('div');
      card.className = 'snippetCard';

      card.innerHTML = `
        <div class="snippet-header">
          <input type="checkbox" class="exportCheckbox" data-index="${index}" />
          <h2>${snippet.title} (${snippet.language})</h2>
        </div>
        <p>${snippet.description}</p>
        <pre><code>${snippet.code}</code></pre>
        ${snippet.image ? `<img src="${snippet.image}" alt="Snippet Image" class="snippetImage">` : ''}
        <div class="card-actions">
          <button class="copyBtn" data-code="${encodeURIComponent(snippet.code)}">📋 Copy</button>
          <button onclick="deleteSnippet(${index})">🗑 Delete</button>
        </div>
      `;

      container.appendChild(card);
    });
}


document.addEventListener('click', function (e) {
  if (e.target.classList.contains('copyBtn')) {
    const code = decodeURIComponent(e.target.dataset.code);
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  }
});

exportBtn.addEventListener('click', function () {
  const selectedIndexes = [...document.querySelectorAll('.exportCheckbox:checked')]
    .map(cb => parseInt(cb.dataset.index));

  if (selectedIndexes.length === 0) {
    alert("Please select at least one snippet to export.");
    return;
  }

  const selectedSnippets = selectedIndexes.map(i => snippets[i]);

  let content = '';
  let mime = 'text/plain';
  let extension = exportFormat.value;

  if (extension === 'json') {
    content = JSON.stringify(selectedSnippets, null, 2);
    mime = 'application/json';
  } else if (extension === 'txt') {
    content = selectedSnippets.map(s => `Title: ${s.title}\nLang: ${s.language}\n${s.description}\n${s.code}`).join('\n\n---\n\n');
  } else if (extension === 'md') {
    content = selectedSnippets.map(s => `## 🔹 ${s.title} (${s.language})\n\n**Description**: ${s.description}\n\n\`\`\`\n${s.code}\n\`\`\``).join('\n\n---\n\n');
  } else if (extension === 'html') {
    content = selectedSnippets.map(s => `<h2>${s.title} (${s.language})</h2><p>${s.description}</p><pre>${s.code}</pre><hr/>`).join('');
    mime = 'text/html';
  }

  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `snippets.${extension}`;
  a.click();
});


importInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const imported = JSON.parse(event.target.result);
      if (Array.isArray(imported)) {
        snippets = snippets.concat(imported);
        localStorage.setItem("snippets", JSON.stringify(snippets));
        renderSnippets();
        alert("Snippets imported successfully!");
      } else {
        alert("Invalid file format.");
      }
    } catch {
      alert("Error reading JSON file.");
    }
  };
  reader.readAsText(file);
});

renderSnippets();