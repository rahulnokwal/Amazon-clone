document.addEventListener("DOMContentLoaded", () => {
  const seeMoreBtn = document.querySelectorAll(".see-more-btn");
  const seeMoreSection = document.querySelector(".see-more-section");
  const mainSection = document.querySelector(".main-section");
  const cartBtn = document.querySelector(".nav-cart");
  const cartSection = document.querySelector(".cart-section");
  const cartItems = document.querySelector(".cart-items");
  const subtotalSection = document.querySelector(".subtotal-section");
  const homeBtn = document.querySelector(".homebtn");

  const products = [
    {
      id: "bs01",
      name: "Adjustable Dumbbell Set",
      price: 1490.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/81NlaW85aBL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "bs02",
      name: "Whey Protein Powder",
      price: 1900.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/71mrbMNaaOL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "bs03",
      name: "Resistance Band Set",
      price: 199.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/619jhkU8wcL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "bs04",
      name: "Non-Slip Yoga Mat",
      price: 249.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/71GT6DxGXkL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "bs05",
      name: "Cast Iron Kettlebell 20lbs",
      price: 349.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/516nhb38fYS._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "bs06",
      name: "Foldable Weight Bench",
      price: 4199.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/51kZdlXm8SL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "bs07",
      name: "Speed Jump Rope",
      price: 149.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/61HiSkomBQL._AC_SX416_CB1169409_QL70_.jpg",
    },

    {
      id: "bs08",
      name: "Doorway Pull-up Bar",
      price: 2999.99,
      category: "Build-Strength",
      image:
        "https://m.media-amazon.com/images/I/716+B9olvlL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "fh01",
      name: "Daily Multivitamin Gummies",
      price: 180.99,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/51RvBkgd8OL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "fh02",
      name: "High-Speed Blender",
      price: 899.99,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/71NP07gkDCL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "fh03",
      name: "Organic Matcha Green Tea",
      price: 422.99,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/81cjIIXS1+L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "fh04",
      name: "Superfood Greens Powder",
      price: 1499.99,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/51tacNqIo4L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "fh05",
      name: "Insulated Stainless Water Bottle",
      price: 935,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/61b5g89WRKL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "fh06",
      name: "Mixed Roasted Nuts Pack",
      price: 1080,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/71uoadMXYJL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "fh07",
      name: "Digital Air Fryer",
      price: 3679.99,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/61ZLAor5y1L._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "fh08",
      name: "Cold Press Juicer",
      price: 21000.0,
      category: "Fuel-Your-Health",
      image:
        "https://m.media-amazon.com/images/I/71EqgKLhTtL._AC_UY436_FMwebp_QL65_.jpg",
    },

    {
      id: "cs01",
      name: "Minimalist Desk Lamp",
      price: 589.99,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/71gyDIwHWvL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs02",
      name: "Velvet Throw Pillow",
      price: 599.99,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/61MOpZvKTwL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs03",
      name: "Abstract Canvas Wall Art",
      price: 1199.99,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/81WKvqlDacL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs04",
      name: "Fluffy Area Rug",
      price: 6865.0,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/91roSBtQOfS._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs05",
      name: "Ceramic Indoor Planter",
      price: 249.5,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/61OEV7gf7gL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs06",
      name: "Lavender Scented Candle",
      price: 122.99,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/61s1ip-816L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs07",
      name: "Floating Wall Bookshelf",
      price: 898.0,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/31LoDzhCaQL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cs08",
      name: "Round Vanity Mirror",
      price: 1055.99,
      category: "Curate-Your-Space",
      image:
        "https://m.media-amazon.com/images/I/81o4U0AEwxL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "wt01",
      name: "Noise Cancelling Earbuds",
      price: 1299.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/519DDBTBbzL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "wt02",
      name: "Fitness Smartwatch",
      price: 999.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/61rmkmqD5VL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "wt03",
      name: "Ergonomic Wireless Mouse",
      price: 549.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/61XXSNfyC6L._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "wt04",
      name: "10000mAh Power Bank",
      price: 1889.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/41vBAaU8clL._AC_SX644_CB1169409_QL70_.jpg",
    },
    {
      id: "wt05",
      name: "Waterproof Bluetooth Speaker",
      price: 17749.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/71X3yLZz3bL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "wt06",
      name: "Fast Wireless Charging Pad",
      price: 599.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/612GqDniteL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "wt07",
      name: "Smart Home Hub",
      price: 2499.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/51uKY6TggGL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "wt08",
      name: "Mesh Wi-Fi Router",
      price: 1095.99,
      category: "Wireless-Technology",
      image:
        "https://m.media-amazon.com/images/I/51Wk8rJnByL._AC_UY436_FMwebp_QL65_.jpg",
    },

    {
      id: "mb01",
      name: "Matte Liquid Lipstick",
      price: 934.0,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/71acjsEWOUL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb02",
      name: "Flawless Finish Foundation",
      price: 356,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/61zh5b1GQjL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb03",
      name: "12-Color Eyeshadow Palette",
      price: 422.99,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/61DoNWIRWWL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb04",
      name: "Volumizing Waterproof Mascara",
      price: 236.5,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/51Y2UGLW+bL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb05",
      name: "10-Piece Makeup Brush Set",
      price: 1229.99,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/71xiqVS5BCL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb06",
      name: "Long-Lasting Setting Spray",
      price: 219.0,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/61yLwQTM2SS._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb07",
      name: "Liquid Illuminating Highlighter",
      price: 351.5,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/71LP4CDAjmL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "mb08",
      name: "Gentle Micellar Cleansing Water",
      price: 176.99,
      category: "Makeup-Beauty",
      image:
        "https://m.media-amazon.com/images/I/51kaaT8crYL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "cp01",
      name: "Orthopedic Dog Bed",
      price: 836.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/71U7B4-Uv2L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp02",
      name: "Multi-Level Cat Tree",
      price: 1482.0,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/81EIREKAn4L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp03",
      name: "Automatic Pet Food Dispenser",
      price: 465.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/71o7kOX4IJL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp04",
      name: "Indestructible Chew Toy",
      price: 615.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/51to7tBvQvL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp05",
      name: "Deshedding Grooming Brush",
      price: 299.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/41yyJ666QhL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp06",
      name: "Self-Cleaning Litter Box",
      price: 1699.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/616T34YjAPL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp07",
      name: "Retractable Dog Leash",
      price: 684.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/41Rbk+Mw+7L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "cp08",
      name: "5-Gallon Glass Fish Tank",
      price: 1459.99,
      category: "Care-Your-Pets",
      image:
        "https://m.media-amazon.com/images/I/71W13UJRjxL._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "nc01",
      name: "Dotted Bullet Journal",
      price: 168.0,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/71EDK-QRO3L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "nc02",
      name: "Calligraphy Fountain Pen",
      price: 627.99,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/71ZF8UwLMeL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "nc03",
      name: "Patterned Origami Paper",
      price: 99.5,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/51bLdGMAezL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "nc04",
      name: "Beginner Sewing Kit",
      price: 264.99,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/81qbEM2AJGL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "nc05",
      name: "Air Dry Sculpting Clay",
      price: 279.99,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/61TkPw0471L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "nc06",
      name: "Chunky Knitting Yarn Set",
      price: 242.0,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/91qOuRiZurL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "nc07",
      name: "Digital Drawing Tablet",
      price: 2147.99,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/51dAV1h36zL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "nc08",
      name: "Vintage Scrapbook Kit",
      price: 1260.5,
      category: "Nurture-Your-Creativity",
      image:
        "https://m.media-amazon.com/images/I/617hM6Gep4L._AC_UL640_FMwebp_QL65_.jpg",
    },

    {
      id: "us01",
      name: "Polarized Aviator Sunglasses",
      price: 1942.0,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/51sbgMetKzL._AC_SX416_CB1169409_QL70_.jpg",
    },
    {
      id: "us02",
      name: "Minimalist Leather Wallet",
      price: 749.99,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/81VnLFM+RAL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "us03",
      name: "Classic White Sneakers",
      price: 1665.0,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/61MINJaIa0L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "us04",
      name: "Vintage Denim Jacket",
      price: 1329.99,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/51g+JumJl9L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "us05",
      name: "Analog Wristwatch",
      price: 1894.99,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/61ybeKQto8L._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "us06",
      name: "Water-Resistant Backpack",
      price: 8999.99,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/71Wh8+nOpRL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "us07",
      name: "Cashmere Winter Scarf",
      price: 473.5,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/81gB9C2pWzL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: "us08",
      name: "Classic Fedora Hat",
      price: 2025.0,
      category: "Unleash-Your-Style",
      image:
        "https://m.media-amazon.com/images/I/51bKsjXgzjL._AC_UL640_FMwebp_QL65_.jpg",
    },
  ];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  seeMoreBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      seeMoreSection.style.display = "flex";
      mainSection.style.display = "none";
      seeMoreSection.innerHTML = "";
      seeMoreSection.scrollTop = 0;
      window.scrollTo(0, 0);

      const currentCategory = btn.getAttribute("id");
      const matchingCategory = products.filter(
        (p) => p.category === currentCategory,
      );
      matchingCategory.forEach((p) => {
        let product = document.createElement("div");
        product.classList.add("products");
        product.innerHTML = ` <div class="products-img">
            <img src="${p.image}" alt="${p.category}" />
          </div>
          <div >
           <p class="name">${p.name}</p>
            <div class="product-info">
             <p class="price"><span>₹ </span>${p.price} <span>M.R.P</span></p>
               <button data-id="${p.id}" class="product-add-btn btn">Add to Cart</button>
            </div>
          </div>`;
        seeMoreSection.appendChild(product);
      });
    });
  });

  seeMoreSection.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const productId = e.target.getAttribute("data-id");
      const item = products.find((p) => p.id === productId);
      addToCart(item);
      renderCart();
    }
  });
  cartSection.addEventListener("click", (e) => {
    if (
      e.target.tagName == "BUTTON" &&
      e.target.classList.contains("product-delete-btn")
    ) {
      const productId = e.target.getAttribute("data-id");
      const indexToDelete = cart.findIndex((p) => p.id === productId);
      if (indexToDelete !== -1) {
        cart.splice(indexToDelete, 1);
      }
      renderCart();
      saveItems();
    }
  });

  function addToCart(item) {
    cart.push(item);
    saveItems();
    renderCart();
  }

  function renderCart() {
    if (cart.length > 0) {
      cartItems.innerHTML = "";
      let totalPrice = 0;
      cart.forEach((p) => {
        totalPrice += p.price;
        let items = document.createElement("div");
        items.classList.add("cart-products");
        items.innerHTML = `<div class="cart-products-img">
            <img src="${p.image}" alt="${p.category}" />
            </div>
            <div class="cart-products-info" >
             <div>
              <p class="name">${p.name}</p>
              <p class="price"><span>₹ </span>${p.price} <span>M.R.P</span></p>
             </div>
            <button data-id="${p.id}" class="product-delete-btn btn">Delete</button>
            </div>
       `;
        cartItems.appendChild(items);
      });
      subtotalSection.innerHTML = "";
      let subTotal = document.createElement("div");
      subTotal.classList.add("subtotal-section");
      subTotal.innerHTML = `<div class="subtotal-section-price"><p> Subtotal: <span>₹ ${totalPrice.toFixed(2)}</span></p>
      <button class="purchase-btn btn">Proceed to buy</button>
      </div>
      `;
      subtotalSection.appendChild(subTotal);

      document.querySelector(".purchase-btn").addEventListener("click", () => {
        alert("Purchase Successful");
        cart = [];
        renderCart();
        saveItems();
      });
    } else {
      cartItems.innerHTML = "<p class='empty-msg'>Your Cart is Empty.</p>";
      subtotalSection.innerHTML = "";
    }
  }

  homeBtn.addEventListener("click", () => {
    cartSection.style.display = "none";
    mainSection.style.display = "flex";
    seeMoreSection.style.display = "none";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  cartBtn.addEventListener("click", () => {
    cartSection.style.display = "flex";
    mainSection.style.display = "none";
    seeMoreSection.style.display = "none";
    renderCart();
  });

  function saveItems() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
