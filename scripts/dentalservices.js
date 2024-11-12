// Loading Service file
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the CSV file
    fetch('Services.csv')  // Adjust the path to your CSV file
        .then(response => response.text())
        .then(data => {
            const dentalservices = parseCSV(data);
            displayProducts(dentalservices);
        })
        .catch(error => console.error('Error loading CSV file:', error));
});

// Function to parse CSV data
function parseCSV(data) {
    const rows = data.split('\n');
    const dentalservices = [];
    // Assume the first row contains headers
    const headers = rows[0].split(',');
    // Loop through each row (skipping header row)
    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',');

        if (values.length === headers.length) {
            const service = {};
            for (let j = 0; j < headers.length; j++) {
                service[headers[j].trim()] = values[j].trim();
            }
            dentalservices.push(service);
        }
    }
    return dentalservices;
}
const services = document.querySelector(".services-cards");
// Function to display the products in the table
function displayProducts(dentalservices) {

    const service_details = dentalservices
        .map(
            (dentalservice) => `
                            <div class="service-card" data-name=${dentalservice['filter']}>
            <figure>
                <img src="images/dentalservices/${dentalservice['Image']}" alt="" class="s-img" />
            </figure>
            <div class="s-details">
                <div class="s-cat">${dentalservice['Category']}</div>
                <div class="s-title">${dentalservice['Name']}</div>
                <div class="s-readmore-btn"> <a href="dentalservice.html/${dentalservice['id']}">Read More
                    <img src="images/icons/icon_rm_right.svg" class="s-rm-icon" alt="" width="24"
                     height="24"></a>
                </div>
            </div>
        </div>`
        )
        .join("");

    services.innerHTML = service_details;


    // Select relevant HTML elements
    const filterButtons = document.querySelectorAll(".services-nav button");
    const filterableCards = document.querySelectorAll(".service-card");
     
    // Function to filter cards based on filter buttons
    const filterCards = (e) => {
        document.querySelector(".services-nav .active").classList.remove("active");
        e.target.classList.add("active");
        console.log(filterableCards);
        filterableCards.forEach(card => {
            // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
            if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
                return card.classList.replace("hide", "show");
            }
            card.classList.add("hide");
        });
    }
    filterButtons.forEach(button => button.addEventListener("click", filterCards));

}
