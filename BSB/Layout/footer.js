class BsbFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer-content">
            <!-- Logo als eigenes Div -->
            <div class="footer-logo-container">
                <img src="/BSB/Pictures/bsb_logo.png" alt="BSB Logo" class="footer-logo">
            </div>
            
            <!-- Linke Spalte mit Kontaktinformationen -->
            <div class="footer-left">
                <p>Kontakt</p>
                <address>
                    Wilhelmstr. 22<br>
                    75015 Bretten<br>
                    Telefon: 0721 936-61600<br>
                    Fax: 0721 936-61789<br>
                    E-Mail: <a href="mailto:sekretariat@bsb-bretten.de">sekretariat@bsb-bretten.de</a>
                </address>
            </div>
            
            <!-- Rechte Spalte mit Abteilungen und Info -->
            <div class="footer-right">
                <div class="footer-departments">
                    <p>Abteilungen</p>
                    <ul>
                        <li><a href="/BSB/Subsites/platzhalter.html">Gewerbliche Schule</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Kaufmännische Berufsschule</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Übergang Schule & Beruf</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Hauswirtschaftlich-sozialwissenschaftliche Schule</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Berufskollegs</a></li>
                        <li><a href="/BSB/Subsites/platzhalter.html">Berufliche Gymnasien</a></li>
                    </ul>
                </div>
                <div class="footer-info">
                    <p>Info</p>
                    <ul>
                        <li><a href="/BSB/Subsites/agb.html">AGB</a></li>
                        <li><a href="/BSB/Subsites/impressum.html">Impressum</a></li>
                        <li><a href="/BSB/Subsites/datenschutz.html">Datenschutzerklärung</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 BSB Bretten. Alle Rechte vorbehalten.</p>
        </div>
    </footer>
        `;
    }
}

customElements.define("bsb-footer", BsbFooter);
