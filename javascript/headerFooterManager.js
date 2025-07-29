class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <table>
        <tr>
          <td colspan="6">
            <h2 class="site-title">ZOEB JAMAL</h2>
          </td>
        </tr>
        <tr>
          <td class="nav-item"><a href="/" target="_self" rel="noopener noreferrer">Home</a></td>
          <td class="nav-item"><a href="/posts.html" target="_self" rel="noopener noreferrer">Posts</a></td>
          <td class="nav-spacer"></td>
          <td class="nav-item"><a href="https://github.com/zoebjamal" target="_blank" rel="noopener noreferrer">GitHub</a></td>
          <td class="nav-item"><a href="https://x.com/zoebjamal" target="_blank" rel="noopener noreferrer">Twitter</a></td>
          <td class="nav-item">
            <button id="mode-toggle" class="mode-button dark-mode-btn" aria-label="Toggle dark mode">
              Dark
            </button>
          </td>
        </tr>
      </table>
    `;
    
    // Dark mode toggle functionality
    const button = this.querySelector('#mode-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      button.className = 'mode-button light-mode-btn';
      button.textContent = 'Light';
    }

    button.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
        button.className = 'mode-button light-mode-btn';
        button.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
      } else {
        button.className = 'mode-button dark-mode-btn';
        button.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
      }
    });
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="contact-info">
        <div class="contact-item">
          <span>📧</span>
          <span>zoebjams [at] gmail [dot] com</span>
        </div>
        <div class="contact-item">
          <span>🏛️</span>
          <span>UC Davis, Davis, CA</span>
        </div>
      </div>
      <hr>
      <p class="footer-text">
        Website design inspired by 
        <a href="https://github.com/owickstrom/the-monospace-web" target="_blank" rel="noopener noreferrer">The Monospace Web</a><br>

        This page was last modified on: <span id="last-modified"></span>
      </p>
    </footer>
    `;
    
    // Set the last modified date
    const date = new Date(document.lastModified);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    
    this.querySelector('#last-modified').textContent = `${yyyy}-${mm}-${dd}`;
  }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)