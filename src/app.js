import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      index: null,
      selectedCountry: 0,
      favouriteCountries: [],
      worldPopulation: 0,
      borderingCountries3Letter: [],
      borderingCountries: []
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
        this.borderingCountries3Letter = this.countries[index].borders
        this.threeLetterName()
      },
      threeLetterName: function() {
        this.borderingCountries3Letter.forEach(function(code) {

          this.countries.forEach((country) {
            if (country.alpha3code === code) {
              this.borderingCountries.push(country.name)
            }
          }

        )}
      )},
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
