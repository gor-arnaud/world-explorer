new Vue({
    el: "#app",
    data: {
        title: "World Explorer",
        countries: [],
        filter: "",
    },
    methods: {
        fetchCountries: function () {
            axios
                .get("https://restcountries.com/v3.1/all")
                .then((response) => (this.countries = response.data))
                .catch((error) => console.error(error));
        },
    },
    computed: {
        sortedCountries: function () {
            return this.countries.sort((c1, c2) =>
                c1.name.common.localeCompare(c2.name.common)
            );
        },
        filteredCountries: function () {
            return this.sortedCountries.filter((c) =>
                c.name.common.toLowerCase().includes(this.filter.toLowerCase())
            );
        },
    },
    mounted() {
        this.fetchCountries();
    },
});