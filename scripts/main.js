async function getCotacaoDolar() {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await response.json();
    return data.rates.USD;
}

async function converter() {
    try {
        var valorEmDolar = parseFloat(document.getElementById("dolarInput").value);

        if (isNaN(valorEmDolar)) {
            throw new Error('Por favor, insira um valor válido em dólar.');
        }

        var cotacaoDolar = await getCotacaoDolar();  // Agora usamos await corretamente

        var valorEmReais = valorEmDolar * cotacaoDolar;

        document.getElementById("reaisOutput").value = valorEmReais.toFixed(2);
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}
