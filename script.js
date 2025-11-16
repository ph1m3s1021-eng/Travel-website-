function recommend() {
    const input = document.getElementById('countryInput');
    const resultDiv = document.getElementById('result');

    const country = input.value.trim().toLowerCase();

    let content = "";

    if (country === "japan") {
        content = `
            <h3>Japan Recommendations</h3>
            <p>Explore the temples in Kyoto and relax on the beaches of Okinawa.</p>
            <img src="https://source.unsplash.com/600x400/?kyoto" alt="Japan temple">
            <img src="https://source.unsplash.com/600x400/?okinawa-beach" alt="Japan beach">
        `;
    } else if (country === "thailand") {
        content = `
            <h3>Thailand Recommendations</h3>
            <p>Visit the temples in Bangkok and the beaches in Phuket.</p>
            <img src="https://source.unsplash.com/600x400/?phuket" alt="Thailand beach">
            <img src="https://source.unsplash.com/600x400/?bangkok-temple" alt="Thailand temple">
        `;
    } else if (country === "italy") {
        content = `
            <h3>Italy Recommendations</h3>
            <p>Relax on the Amalfi Coast and discover historic sites in Rome.</p>
            <img src="https://source.unsplash.com/600x400/?amalfi-coast" alt="Italy beach">
            <img src="https://source.unsplash.com/600x400/?rome" alt="Italy city">
        `;
    } else {
        content = `
            <p>No specific recommendations found for this country. 
            Try "Japan", "Thailand", or "Italy".</p>
        `;
    }

    resultDiv.innerHTML = content;
}
