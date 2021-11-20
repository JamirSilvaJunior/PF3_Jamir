const calcular = document.getElementById('calcular');


function poupanca () {
    const nome = document.getElementById('nome').value;
    const deposito = document.getElementById('deposito').value;
    const juros = document.getElementById('juros').value/100;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    function formata(valor)
    {
        let formatador = new Intl.NumberFormat('pt-br',
        { minimunFractionDigits: 0, maximumFractionDigit: 2 });

        return formatador.format(valor);
    }

    if (nome !='' && deposito !== '' && juros !== '' && parcelas !== '') {
        
        const VFP =  formata( (deposito*((((1+juros)**parcelas)-1)/juros)).toFixed(2));

        resultado.textContent = `${nome}, se você aplicar R $${deposito}, à taxa de juros de ${juros*100}% ao mês,
         durante ${parcelas} meses, acumulará uma poupança de R $${VFP}` 
    }

}
calcular.addEventListener('click', poupanca);