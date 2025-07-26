// Indian Veg Dishes
const vegDishes = [
  {
    title: "Paneer Butter Masala",
    desc: "Soft paneer cubes in a rich, creamy tomato gravy.",
    price: 11,
    img: "https://media.istockphoto.com/id/2177168063/photo/closeup-footage-of-the-indian-paneer-butter-masala-dish-on-wooden-table-against-blur.jpg?s=612x612&w=0&k=20&c=bSxnqgwVmAL5dTAICdZA4v3riurHhNz8wS7qPqOn0OY="
  },
  {
    title: "Vegetable Biryani",
    desc: "Aromatic basmati rice cooked with fresh vegetables & spices.",
    price: 10,
    img: "https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs="
  },
  {
    title: "Palak Paneer",
    desc: "Paneer cubes cooked in a spinach-based gravy.",
    price: 12,
    img: "https://media.istockphoto.com/id/1395567582/photo/palak-paneer-and-tandoori-roti.jpg?s=612x612&w=0&k=20&c=ihZZWJx1er3dDkWozjachnnbOlvqWk9YNIdXMped6GE="
  },
  {
    title: "Dal Tadka",
    desc: "Yellow lentils tempered with Indian spices and ghee.",
    price: 8,
    img: "https://media.istockphoto.com/id/1326814967/photo/indian-popular-food-dal-fry-or-traditional-dal-tadka-curry.jpg?s=612x612&w=0&k=20&c=s_qcd0pilxt14JmmJzfgkCYkfPKw3be1C2S9uAi7wQM="
  }
];

// Indian Non-Veg Dishes
const nonVegDishes = [
  {
    title: "Chicken Tikka Masala",
    desc: "Tender chicken pieces in spicy tomato gravy.",
    price: 13,
    img: "https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.jpg?s=612x612&w=0&k=20&c=OLP7dEK6tyVtaUZAGC9SYftn9JOanU7IibSRs_F37DA="
  },
  {
    title: "Mutton Rogan Josh",
    desc: "Kashmiri-style mutton curry with aromatic spices.",
    price: 15,
    img: "https://media.istockphoto.com/id/1426887055/photo/home-cooked-mutton-gravy-or-mutton-curry-with-roti-and-onion-salad.jpg?s=612x612&w=0&k=20&c=Ycis7KZmMbWXOJ44LFCoYT-mIArTogPhJqvrKd6VIqo="
  },
  {
    title: "Fish Curry",
    desc: "Fish fillets simmered in coconut and tamarind gravy.",
    price: 14,
    img: "https://media.istockphoto.com/id/1264335635/photo/close-up-image-of-metal-tongs-turning-crispy-fried-fish-in-a-frying-pan-goan-fish-curry-recipe.jpg?s=612x612&w=0&k=20&c=IAgFB3ddm7GKzLGvg5MyuAb32MrgisqtVMjy2H0hIVQ="
  },
  {
    title: "Egg Curry",
    desc: "Boiled eggs in spicy onion-tomato masala.",
    price: 9,
    img: "https://media.istockphoto.com/id/1185235352/photo/boiled-eggs-cooked-in-spicy-curry-sauce-close-up-in-a-plate-horizontal.jpg?s=612x612&w=0&k=20&c=vI1r0To_SOHqy2721_AJ7OTejxDkSjMIEglR52AUrNY="
  }
];

const pages = {
 home: `
  <div class="hero-section">
  <div class="hero-overlay">
    <div class="hero-text-content">
      Welcome to The Great Indian Kitchen!
      <span>Where every dish is a journey—crafted with age‑old recipes, rich spices, and a sprinkle of love—bringing you the true essence of India in every bite.</span>
    </div>
  </div>
</div>
`,


  menu: `
   <div class="search-bar-wrapper text-center my-4">
  <div class="input-group mx-auto shadow-sm" style="max-width: 400px;">
    <input type="text" id="menuSearch" class="form-control rounded-start" placeholder="Search our delicious menu...">
    <button class="btn btn-primary rounded-end" type="button" id="searchBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11 6a5 5 0 1 0-1.001 9.999A5 5 0 0 0 11 6zm-7 5a7 7 0 1 1 14 0A7 7 0 0 1 4 11zm8.646 2.646-3.387-3.387A6.978 6.978 0 0 1 11 6a7 7 0 1 1-7 7c0-1.32.425-2.535 1.159-3.53l3.387 3.387a.5.5 0 0 0 .708-.708z"/>
      </svg>
    </button>
  </div>
</div>

    <h2 class="mb-3 mt-4">Veg Dishes</h2>
    <div class="row g-4" id="vegMenuList"></div>
    <h2 class="mb-3 mt-5">Non-Veg Dishes</h2>
    <div class="row g-4" id="nonVegMenuList"></div>
  `,
  about: `
  <h2>About Us</h2>
  <p>
    Established in 2022, <strong>Delicious Bites</strong> is a family-owned restaurant passionate about sharing authentic Indian flavors.
    From fragrant curries to freshly baked breads, each dish is crafted with carefully chosen spices and traditional recipes.
    We take pride in offering a warm, welcoming experience that feels like home.
  </p>
  <div class="row g-4 mb-4 mt-3">
    <div class="col-md-6">
      <img src="https://media.istockphoto.com/id/157473171/photo/heads.jpg?s=612x612&w=0&k=20&c=QkXMrJHWymCW6sCJJIlwMlq7hD3Mdil8j95ZmKUFR5E=" 
           class="img-fluid rounded shadow" alt="Our Team" />
    </div>
    <div class="col-md-6">
      <img src="https://media.istockphoto.com/id/1833455725/photo/portrait-of-a-group-of-employees-working-at-an-industrial-bakery.jpg?s=612x612&w=0&k=20&c=uexUlnJr7SgIA3cFzKh_hMSYIAaINdNzMxlqi24sDAI=" 
           class="img-fluid rounded shadow" alt="Our Kitchen" />
    </div>
  </div>

  <h3 class="mt-4">Meet Our Chefs</h3>
  <div class="row g-4">
    <div class="col-md-4 text-center">
      <img src="https://media.istockphoto.com/id/1193073801/photo/portrait-of-restaurant-chef-with-his-team-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=8j4NOzMyZqyFtmrzQa6nX1nV3iYv5NbU2ovkoibcy7Y=" 
           class="img-fluid rounded shadow chef-img" alt="Chef Anil" />
      <h5 class="mt-2">Chef Anil Kumar</h5>
      <span class="badge bg-primary mb-2">15+ years experience</span>
      <p class="text-muted">Master of North Indian classics, Chef Anil’s secret spice blends bring warmth and nostalgia to every meal.</p>
    </div>
    <div class="col-md-4 text-center">
      <img src="https://media.istockphoto.com/id/2034881779/photo/portrait-of-indian-woman-chef-wearing-apron-isolated-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=w_qGTEq4LdhUaU_TkwLIzvo03o5ONB9NXvJYzh06Igg=" 
           class="img-fluid rounded shadow chef-img" alt="Chef Priya" />
      <h5 class="mt-2">Chef Priya Singh</h5>
      <span class="badge bg-success mb-2">Fusion Specialist</span>
      <p class="text-muted">Combining tradition with creativity, Chef Priya creates unique South Indian dishes and inventive fusion delights.</p>
    </div>
    <div class="col-md-4 text-center">
      <img src="https://media.istockphoto.com/id/1393223576/photo/a-smartly-dressed-indian-chef-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=__k9eR1wM91ueVL9EKiyszXnKdnqJuKE-QR6R9lSANA=" 
           class="img-fluid rounded shadow chef-img" alt="Chef Ravi" />
      <h5 class="mt-2">Chef Ravi Patel</h5>
      <span class="badge bg-warning text-dark mb-2">Street Food Expert</span>
      <p class="text-muted">From tangy chaats to sizzling kebabs, Chef Ravi captures the vibrant flavors of India’s famous street food scene.</p>
    </div>
  </div>
`,

  contact: `
  <h2>Contact Us</h2>
  <p class="mb-4">
    Have a question, want to book a table, or just want to say hello? Fill out the form below and we’ll get back to you soon!
  </p>
  <div class="row g-4">
    <div class="col-md-7">
      <form id="contactForm" class="shadow p-4 rounded bg-light">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message:</label>
          <textarea class="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
        <div id="contactAlert" class="alert alert-success mt-3 d-none" role="alert">
          Thank you for contacting us!
        </div>
      </form>
    </div>
    <div class="col-md-5">
      <div class="bg-white shadow p-4 rounded h-100">
        <h5>Our Address</h5>
        <p>
          <strong>Delicious Bites</strong><br>
          123 Main Street, Food City
        </p>
        <h5>Call Us</h5>
        <p>(123) 456-7890</p>
        <h5>Email</h5>
        <p>info@thegreatindiankitchen.com</p>
        <h5>Opening Hours</h5>
        <p>Mon–Sun: 11:00 AM – 10:00 PM</p>
      </div>
    </div>
  </div>
`

};

function loadPage(page) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.textContent.trim().toLowerCase() === page) link.classList.add('active');
  });
  document.getElementById('main-content').innerHTML = pages[page];

  if (page === 'menu') {
    renderMenuLists(vegDishes, nonVegDishes);
    // Both search input and button trigger search
    const searchInput = document.getElementById('menuSearch');
    const searchBtn = document.getElementById('searchBtn');
    function doSearch() {
      const value = searchInput.value.trim().toLowerCase();
      const vegFiltered = vegDishes.filter(item =>
        item.title.toLowerCase().includes(value) ||
        item.desc.toLowerCase().includes(value)
      );
      const nonVegFiltered = nonVegDishes.filter(item =>
        item.title.toLowerCase().includes(value) ||
        item.desc.toLowerCase().includes(value)
      );
      renderMenuLists(vegFiltered, nonVegFiltered);
    }
    searchInput.addEventListener('input', doSearch);
    searchBtn.addEventListener('click', doSearch);
    // Also allow Enter key in input to trigger button click
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === "Enter") {
        doSearch();
      }
    });
  }

  if (page === 'contact') {
    setTimeout(() => {
      document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('contactAlert').classList.remove('d-none');
        this.reset();
      });
    }, 100);
  }
}

function renderMenuLists(veg, nonVeg) {
  const vegHolder = document.getElementById('vegMenuList');
  const nonVegHolder = document.getElementById('nonVegMenuList');
  if (vegHolder) {
    vegHolder.innerHTML = veg.length === 0
      ? `<p class="text-muted">No veg dishes found.</p>`
      : veg.map(item => menuCardHTML(item)).join('');
  }
  if (nonVegHolder) {
    nonVegHolder.innerHTML = nonVeg.length === 0
      ? `<p class="text-muted">No non-veg dishes found.</p>`
      : nonVeg.map(item => menuCardHTML(item)).join('');
  }
}

function menuCardHTML(item) {
  return `
    <div class="col-md-6 col-lg-3">
      <div class="card menu-card h-100 shadow-sm">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.desc}</p>
          <span class="badge bg-success">$${item.price}</span>
        </div>
      </div>
    </div>
  `;
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => loadPage('home'));