async function converter() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!response.ok) {
            throw new Error('Erro ao obter a cotação do dólar. Verifique a conexão ou tente novamente mais tarde.');
        }

        const data = await response.json();
        const cotacaoDolar = data.rates.BRL;  // Corrigido para BRL

        var valorEmDolar = parseFloat(document.getElementById("dolarInput").value);
        
        if (isNaN(valorEmDolar)) {
            throw new Error('Por favor, insira um valor válido em dólar.');
        }

        var valorEmReais = valorEmDolar * cotacaoDolar;  // Corrigido para multiplicação

        document.getElementById("reaisOutput").value = valorEmReais.toFixed(2);
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}
