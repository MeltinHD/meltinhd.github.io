/** Add any JavaScript you need to this file. */

window.onload = function() {
  var clicks = 0;
  var price = 0;
  for (var i = 0; i < Games.length; i++) {
    document.querySelector('#title' + i).innerHTML = Games[i].title;
    document.querySelector('#description' + i).innerHTML = Games[i].description;
    document.querySelector('#price' + i).innerHTML = '$' + Games[i].price;
    document.querySelector('#category' + i).innerHTML = Games[i].category;
  }
  document.getElementsByClassName('addcart')[0].onclick = function() {
    clicks++;
    price += Games[0].price;
    document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
    document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
  };
  document.getElementsByClassName('addcart')[1].onclick = function() {
    clicks++;
    price += Games[1].price;
    document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
    document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
  };
  document.getElementsByClassName('addcart')[2].onclick = function() {
    clicks++;
    price += Games[2].price;
    document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
    document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
  };
  document.getElementsByClassName('addcart')[3].onclick = function() {
    clicks++;
    price += Games[3].price;
    document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
    document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
  };
  document.getElementsByClassName('addcart')[4].onclick = function() {
    clicks++;
    price += Games[4].price;
    document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
    document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
  };
  document.getElementsByClassName('addcart')[5].onclick = function() {
    clicks++;
    price += Games[5].price;
    document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
    document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
  };

  document.querySelector('#Games').onclick = function() {
    for (var i = 0; i < Games.length; i++) {
      document.querySelector('#title' + i).innerHTML = Games[i].title;
      document.querySelector('#image' + i).src = Games[i].img;
      document.querySelector('#description' + i).innerHTML = Games[i].description;
      document.querySelector('#price' + i).innerHTML = '$' + Games[i].price;
      document.querySelector('#category' + i).innerHTML = Games[i].category;
    }
    document.getElementsByClassName('addcart')[0].onclick = function() {
      clicks++;
      price += Games[0].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[1].onclick = function() {
      clicks++;
      price += Games[1].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[2].onclick = function() {
      clicks++;
      price += Games[2].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[3].onclick = function() {
      clicks++;
      price += Games[3].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[4].onclick = function() {
      clicks++;
      price += Games[4].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[5].onclick = function() {
      clicks++;
      price += Games[5].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
  };

  document.querySelector('#movies').onclick = function() {
    for (var i = 0; i < Movies.length; i++) {
      document.querySelector('#title' + i).innerHTML = Movies[i].title;
      document.querySelector('#image' + i).src = Movies[i].img;
      document.querySelector('#price' + i).innerHTML = '$' + Movies[i].price;
      document.querySelector('#description' + i).innerHTML = Movies[i].description;
      document.querySelector('#category' + i).innerHTML = Movies[i].category;
    }

    document.getElementsByClassName('addcart')[0].onclick = function() {
      clicks++;
      price += Movies[0].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[1].onclick = function() {
      clicks++;
      price += Movies[1].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[2].onclick = function() {
      clicks++;
      price += Movies[2].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[3].onclick = function() {
      clicks++;
      price += Movies[3].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[4].onclick = function() {
      clicks++;
      price += Movies[4].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[5].onclick = function() {
      clicks++;
      price += Movies[5].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
  };

  document.querySelector('#music').onclick = function() {
    for (var i = 0; i < Music.length; i++) {
      document.querySelector('#title' + i).innerHTML = Music[i].title;
      document.querySelector('#image' + i).src = Music[i].img;
      document.querySelector('#price' + i).innerHTML = '$' + Music[i].price;
      document.querySelector('#description' + i).innerHTML = Music[i].description;
      document.querySelector('#category' + i).innerHTML = Music[i].category;
    }
    document.getElementsByClassName('addcart')[0].onclick = function() {
      clicks++;
      price += Music[0].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[1].onclick = function() {
      clicks++;
      price += Music[1].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[2].onclick = function() {
      clicks++;
      price += Music[2].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[3].onclick = function() {
      clicks++;
      price += Music[3].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[4].onclick = function() {
      clicks++;
      price += Music[4].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
    document.getElementsByClassName('addcart')[5].onclick = function() {
      clicks++;
      price += Music[5].price;
      document.querySelector('#cartNum').innerHTML = 'Cart: ' + clicks + ' item(s)';
      document.querySelector('#TotalPrice').innerHTML = 'Price: $' + price.toFixed(2);
    };
  };
};

var Games = [
  {
    title: 'Call of Duty: Modern Warfare',
    img: 'images/MW.jpg',
    price: 69.99,
    description:
      'A first-person shooter video game containing Single-Player, Multiplayer and Co-op',
    category: 'Video Games',
    code: 'MW'
  },
  {
    title: 'Doom Eternal',
    img: 'images/DE.jpg',
    price: 79.99,
    description: 'A single-player and multiplayer first-person shooter video game',
    category: 'Video Games',
    code: 'DE'
  },
  {
    title: 'Mario Kart 8 Deluxe',
    img: 'images/MK8.jpg',
    price: 69.99,
    description: 'A multiplayer racing video game only available on the Nintendo Switch',
    category: 'Video Games',
    code: 'MK8'
  },
  {
    title: 'Overwatch',
    img: 'images/OW.jpg',
    price: 19.99,
    description: 'A multiplayer first-person shooter 5v5 team-based competitive video game',
    category: 'Video Games',
    code: 'OW'
  },
  {
    title: 'Super Smash Bros. Ultimate',
    img: 'images/SSBU.jpg',
    price: 69.99,
    description: 'A multiplayer fighting video game only available on the Nintendo Switch',
    category: 'Video Games',
    code: 'SSBU'
  },
  {
    title: "Tom Clancy's Rainbow Six Siege",
    img: 'images/R6.jpg',
    price: 19.99,
    description: 'A multiplayer first-person shooter 5v5 team-tactical competitive video game',
    category: 'Video Games',
    code: 'R6'
  }
];

var Movies = [
  {
    title: '1917',
    img: 'images/1917.jpg',
    price: 14.99,
    description: 'A Drama war genre film based on World War 1',
    category: 'Movies',
    code: '1917'
  },
  {
    title: 'Avengers: Endgame',
    img: 'images/Endgame.jpg',
    price: 19.99,
    description: 'An action adventure and Sci-Fi genre superhero film based on The Avengers',
    category: 'Movies',
    code: 'AE'
  },
  {
    title: 'Hobbs&Shaw',
    img: 'images/HobbsandShaw.jpg',
    price: 14.99,
    description: 'An action comedy spin-off film based on the Fast & Furious Franchise',
    category: 'Movies',
    code: 'HS'
  },
  {
    title: 'Joker',
    img: 'images/Joker.jpg',
    price: 19.99,
    description: 'a drama, crime thriller film based on the DC Comics characters',
    category: 'Movies',
    code: 'Jk'
  },
  {
    title: 'Spider-Man: Far from Home',
    img: 'images/Spider-Man_Far_From_Home_poster.jpg',
    price: 19.99,
    description: 'An action adventure, Sci-Fi film based on the Marvel Comic Superhero, Spider-Man',
    category: 'Movies',
    code: 'SM'
  },
  {
    title: 'Star Wars: The Rise of Skywalker',
    img: 'images/StarWars.jpg',
    price: 14.99,
    description: 'An action adventure, fantasy film based on the Star Wars Franchise',
    category: 'Movies',
    code: 'SW'
  }
];

var Music = [
  {
    title: 'Kendrick Lamar - DAMN.',
    img: 'images/Kendrick_Lamar_-_Damn.png',
    price: 6.99,
    description: "A hip hop style music which is Kendrick Lamar's fourth album",
    category: 'Music'
  },
  {
    title: 'Eminem - Recovery',
    img: 'images/Recovery_Album_Cover.jpg',
    price: 5.99,
    description: "A hip hop style music which is Eminem's seventh album",
    category: 'Music'
  },
  {
    title: 'Tame Impala - The Slow Rush',
    img: 'images/Tame_Impala_-_The_Slow_Rush.png',
    price: 10.99,
    description: "A pop style music which is Tame Impala's fourth album",
    category: 'Music'
  },
  {
    title: 'Travis Scott - ASTROWORLD',
    img: 'images/Astroworld_by_Travis_Scott.jpg',
    price: 9.99,
    description: "A hip hop style music which is Travis Scott's third album",
    category: 'Music'
  },
  {
    title: 'The Weeknd - After Hours',
    img: 'images/The_Weeknd_-_After_Hours.png',
    price: 11.99,
    description: "A R&B style music which is The Weeknd's fourth album",
    category: 'Music'
  },
  {
    title: 'The Weeknd - Starboy',
    img: 'images/The_Weeknd_-_Starboy.png',
    price: 9.99,
    description: "A R&B style music which is The Weeknd's third album",
    category: 'Music'
  }
];
