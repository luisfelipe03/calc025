document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const xy = parseFloat(document.getElementById('xy').value);
    const oddempate = parseFloat(document.getElementById('oddempate').value);
    const odd1 = parseFloat(document.getElementById('odd1').value);

    function calcular_proporcao(xy, odd1, oddempate) {
        const a = 2 + oddempate;
        const b = odd1;
        const c = 100;

        const x = (xy * odd1 + c) / (2 * oddempate + odd1);
        const y = xy - x;

        return { x, y };
    }

    const { x, y } = calcular_proporcao(xy, odd1, oddempate);

    document.getElementById('resultEmpate').textContent = `Stake do empate = ${x.toFixed(2)}`;
    document.getElementById('resultVitoria').textContent = `Stake da vitória = ${y.toFixed(2)}`;
});
