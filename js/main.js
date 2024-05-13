const { createApp } = Vue

const configurazione = {
    data() {
        return {
            titolo: "Hello World",
            sottotitolo: "Buongiorno",
        }
    }
}

createApp(configurazione).mount('#app')