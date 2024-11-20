class BsbHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="logo-container">
                <a href="/BSB/Homepage/homepage.html"> <!-- Die URL zur Homepage -->
                <img src="/BSB/Pictures/bsb_logo.png" alt="BSB Bretten Logo">
                 </a>
            </div>

            <div class="nav-container">
                <nav>
                    <ul>
                        <li><a href="/BSB/Subsites/platzhalter.html">Unsere Schule</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Anmeldung</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Über uns</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
    }
}

customElements.define("bsb-header", BsbHeader);
