import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      index: null,
      selectedCountry: {},
      favouriteCountries: [],
      worldPopulation: 0
    },
    mounted: function() {
      this.fetchCountries()

    },
    methods: {
      fetchCountries: function() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => {
          this.countries = countries
          this.calculateTotalPopulation()
        } )

      },
      selectCountry: function(index) {
        // const selectedCountry = countries.find(country)
        this.selectedCountry = this.countries[index];

      },
      saveToFavourites: function() {
        this.favouriteCountries.push(this.countries[this.index])
        console.log(this.favouriteCountries);
      },
      calculateTotalPopulation: function() {
        this.worldPopulation = this.countries.reduce(function(runningTotal, country) {
          return runningTotal + country.population
        }, 0)

      }
    },
  })
})
