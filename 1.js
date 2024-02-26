const products = [
    {
        image: './Images/calculator1.jpg',
        name: 'Campus-Mini Engineering Drafter',
        description: 'Casio Scientific Calculator FX-991ES.',
        price: '₹750',
        seller: 'Rohan Gupta',
        contact: 'rohangupta@example.com',
        width :'300px',
        height :'200px'
    },
    {
        image: './Images/laptop2.jpg',
        name: 'Laptop - Dell Inspiron 15',
        description: 'Gently used Dell laptop in excellent condition.',
        price: '$500',
        seller: 'Jane Smith',
        contact: 'janesmith@example.com',
        width :'300px',
        height :'200px'
    },
    {
        image: './Images/airpod.webp',
        name: 'Airdopes 170',
        description: 'Wireless Bluetooth Earbuds with 13mm Drivers, Upto 50 Hours of battery life, BEAST™ Mode, Quad Mics with ENx™ Technology',
        price: '$20',
        seller: 'Jane Smith',
        contact: 'janesmith@example.com',
        width :'300px',
        height :'200px'
    },
    {
        image: './Images/neckband.webp',
        name: 'Boat neckband',
        description: 'boAt Rockerz 255 Pro+ /258 Pro+ with ASAP Charge and upto 60 Hours Playback Bluetooth Headset  (Active Black, In the Ear',
        price: '$10',
        seller: 'Jane Smith',
        contact: 'janesmith@example.com',
        width :'300px',
        height :'218px'
    },
    {
        image: './Images/realmephone.jpg',
        name: 'Xiaomi Poco X5',
        description: 'Xiaomi Poco X5 5G, Dual SIM, 265GB + 8GB, Factory Unlocked GSM, International Version (Fast Car Charger Bundle)- No Warranty - Black',
        price: '$200',
        seller: 'Jane Smith',
        contact: 'janesmith@example.com',
        width :'250px',
        height :'200px'
    },
    {
        image: 'https://jantacart.com/media/catalog/product/cache/560630b1454f7c05fc88a5181a9f63d4/o/m/omega-1954-original-imadz44gvhzuhv8a.jpeg',
        name: 'Omega - Engineering Drafter',
        description: 'Drafting-Arm-Vintage-Board Master-Drafting-Machine Mini Drafter & Cover Mini Drafter - Professional Creative Engineering Student',
        price: '₹250',
        seller: 'Mudit rastogi',
        contact: 'muditrastogi@example.com',
        width :'300px',
        height :'200px'
    },
    {
        image: './Images/mcafee.webp',
        name: 'McAfee Total Protection 2023',
        description: 'McAfee Total Protection 2023 | 5 Device | Cybersecurity Software Includes Antivirus, Secure VPN, Password Manager, Dark Web Monitoring | Amazon Exclusive | Key Card',
        price: '$10',
        seller: 'Jane Smith',
        contact: 'janesmith@example.com',
        width :'300px',
        height :'200px'
    },
    {
        image: './Images/mouse.webp',
        name: 'VssoPlor Wireless Mouse',
        description: 'VssoPlor Wireless Mouse, 2.4G Slim Portable Computer Mice with Nano Receiver for Notebook, PC, Laptop, Computer (Black and Gold)',
        price: '$08',
        seller: 'Jane Smith',
        contact: 'janesmith@example.com',
        width :'300px',
        height :'218px'
    },
    
];

const productsPerPage = 4; // Number of products per page
let currentPage = 1; // Current page

// Function to display products on the current page
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex && i < products.length; i++) {
        const product = products[i];
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create product card content
        productCard.innerHTML = `
            <img src="${product.image}" alt="Product Image" width="${product.width}" height="${product.height}">
            <h3>${product.name}</h3>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
            <div class="seller-info">
                <p>Seller: ${product.seller}</p>
                <p>Contact: ${product.contact}</p>
            </div>
            <a href='new.html' class="button-64" role="button" data-contact="${product.contact}">Contact Seller</a>
        `;

        // Add product card to the container
        productContainer.appendChild(productCard);
    }
}


displayProducts();

// Handle the "Previous" button click
const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', () => {
    currentPage--;
    if (currentPage < 1) {
        currentPage = Math.ceil(products.length / productsPerPage);
    }
    displayProducts();
});

// Handle the "Next" button click
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
    currentPage++;
    if (currentPage > Math.ceil(products.length / productsPerPage)) {
        currentPage = 1;
    }
    displayProducts();
});

// Initial display of products
displayProducts();

// Handle the "Contact Seller" button click
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('contact-seller-button')) {
        const contactEmail = event.target.getAttribute('data-contact');
        window.location.href = `contact.html?email=${encodeURIComponent(contactEmail)}`;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu a');
  
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Smooth scroll behavior
            });
        }
    }
});
