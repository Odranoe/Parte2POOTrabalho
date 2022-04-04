class Moedas {
    dolar;
    euro;
    libra;
    real;

    constructor() {
        this.dolar = 4.76
        this.euro =  5.15
        this.libra = 6.11
    }

    converterRealDolar(){
        this.real = document.getElementById('realDolar').value;

        const valorEmDolar = parseFloat(this.real) / this.dolar;

        document.getElementById('resultadoRealDolar').innerText = valorEmDolar
    }

    converterRealEuro(){
        this.real = document.getElementById('realEuro').value;

        const valorEmEuro = parseFloat(this.real) / this.euro;

        document.getElementById('resultadoRealEuro').innerText = valorEmEuro
    }

    converterRealLibra(){
        this.real = document.getElementById('realLibra').value;

        const valorEmLibra = parseFloat(this.real) / this.libra;

        document.getElementById('resultadoRealLibra').innerText = valorEmLibra
    }

    converterDolarReal(){
        this.real = document.getElementById('dolarReal').value;

        const valorEmReal = parseFloat(this.dolar) * this.real;

        document.getElementById('resultadoDolarReal').innerText = valorEmReal
    }

    converterEuroReal(){
        this.real = document.getElementById('euroReal').value;

        const valorEmReal = parseFloat(this.euro) * this.real;

        document.getElementById('resultadoEuroReal').innerText = valorEmReal
    }

    converterLibraReal(){
        this.real = document.getElementById('libraReal').value;

        const valorEmReal = parseFloat(this.libra) * this.real;

        document.getElementById('resultadoLibraReal').innerText = valorEmReal
    }

}

const conversao = new Moedas();