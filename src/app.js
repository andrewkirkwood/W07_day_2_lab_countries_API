import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      index: null,
      selectedCountry: {},
      favouriteCountries: []
    },
    mounted: function() {
      this.fetchCountries()
    },
    methods: {
      fetchCountries: function() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => this.countries = countries)
      },
      selectCountry: function(index) {
        // const selectedCountry = countries.find(country)
        this.selectedCountry = this.countries[index]
      },
      saveToFavourites: function() {
        this.favouriteCountries.push(this.countries[this.index])
        console.log(this.favouriteCountries);
      }
    },
  })
})
