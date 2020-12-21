<template>
  <div>

<div>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni quaerat maxime ipsum quasi, eos consectetur numquam distinctio provident praesentium tenetur aliquam sequi, soluta temporibus, magnam quas itaque architecto commodi?</p>
</div>

    <div class="bg"></div>
    <div class="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value="10">Зимняя рапсодия ($10)</option>
        <option value="12">Ирония зимы ($12)</option>
        <option value="15">АЗІРНІСЯ Ў ГНЕВЕ ($15)</option>
        <option value="9">Щелкунчик ($9)</option>
      </select>
    </div>

    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div class="container">
      <div class="screen"></div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
    </div>
    <p class="text">
      You have selected <span id="count">0</span> seats for a price of $
      <span id="total">0</span>.
    </p>

    
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: '@/services/booking/seat.service.js'
        }
      ]
    }
  },
  name: 'theatreApp',
  data() {
    return {
    };
  },
  mounted(){
    const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const screen = document.querySelector(".screen");
const img = document.createElement("img");
populateUI();
let ticketPrice = +movieSelect.value;

const imgUrl = [
  "https://www.ticketpro.by/storage/img/uploads/event/5fa4fa8579599.png",
  "https://www.ticketpro.by/storage/img/uploads/event/5f860f00b5d3f.png",
  "https://www.ticketpro.by/storage/img/uploads/event/5fd86c4930434.jpg",
  "https://www.ticketpro.by/storage/img/uploads/event/5dadacaa5d90e.png"
];
// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
  img.src = imgUrl[movieIndex];
  screen.appendChild(img);
};

// Update total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeat", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  while (screen.hasChildNodes()) {
    screen.removeChild(screen.firstChild);
  }
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat select event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial Count and Total
updateSelectedCount();
  }
  
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  background-image: url("https://www.belta.by/images/storage/news/with_archive/2020/000351_1578076306_374913_big.jpg");
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Mitr", sans-serif;
  margin: 0;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 5, 0.2);
  z-index: -1;
}

.movie-container {
  margin: 20px 0;
}

.movie-container select {
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.container {
  perspective: 700px;
  margin-bottom: 30px;
  /* border: 3px red solid; */
  width: 300px;
}

.seat {
  background-color: #8a1717;
  height: 12px;
  width: 15px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.seat.selected {
  background-color: #6feaf6;
}

.seat.occupied {
  background-color: #444451;
}

.seat:nth-of-type(2) {
  margin-right: 20px;
}

.seat:nth-last-of-type(2) {
  margin-left: 20px;
}

.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
}

.showcase .seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}

.showcase {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  border-radius: 5px;
  color: #777;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.showcase li small {
  margin-left: 2px;
}

.row {
  display: flex;
  justify-content: center;
}

.screen {
  background-color: #fff;
  overflow: hidden;
  height: 200px;
  width: 100%;
  margin: 15px 0;
  transform: rotateX(-55deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}

p.text {
  margin: 5px 0;
}

p.text span {
  color: #6feaf6;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>