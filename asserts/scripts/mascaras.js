function MascaraAno(ano) {
    if (mascaraInteiro(ano) == false) {
        event.returnValue = false;
    }

    return formataCampo(ano, '0000', event);
}

function MascaraCep(cep) {
    if (mascaraInteiro(cep) == false) {
        event.returnValue = false;
    }

    return formataCampo(cep, '00.000-000', event);
}

function mascaraInteiro() {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;

        return false;
    }

    return true;
}

function formataCampo(campo, Mascara, evento) {
    let boleanoMascara;

    const Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g;
    campoSoNumeros = campo.value.toString().replace(exp, "");

    const posicaoCampo = 0;
    const NovoValorCampo = "";
    const TamanhoMascara = campoSoNumeros.length;

    if (Digitato != 8) { // backspace 
        for (i = 0; i <= TamanhoMascara; i++) {
            boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                || (Mascara.charAt(i) == "/"));
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "));
            if (boleanoMascara) {
                NovoValorCampo += Mascara.charAt(i);
                TamanhoMascara++;
            } else {
                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                posicaoCampo++;
            }
        }
        campo.value = NovoValorCampo;

        return true;
    } else {

        return true;
    }
}