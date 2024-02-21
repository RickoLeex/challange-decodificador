function Criptografar() {
    let texto = document.getElementById("texto").value;

    //separando letras
    let letras = texto.split('');
    
    //verifica e substitui letras
    letras.forEach(letra => {
        if(letra == "e"){
            let posicao = letras.indexOf(letra);
            letras.fill("enter", posicao, posicao + 1);
        }
        if(letra == "i"){
            let posicao = letras.indexOf(letra);
            letras.fill("imes", posicao, posicao + 1);
        }
        if(letra == "a"){
            let posicao = letras.indexOf(letra);
            letras.fill("ai", posicao, posicao + 1);
        }
        if(letra == "o"){
            let posicao = letras.indexOf(letra);
            letras.fill("ober", posicao, posicao + 1);
        }
        if(letra == "u"){
            let posicao = letras.indexOf(letra);
            letras.fill("ufat", posicao, posicao + 1);
        }
    });

    //Transforma a array em string para poder retornar.
    texto = letras.toString();
    texto = texto.replace(/,/g, '');
    let imagem = document.getElementById("fotonice");
    let h2 = document.getElementById("niceh2");
    let p = document.getElementById("nicep");
    imagem.className = "disabled";
    h2.className = "disabled";
    p.className = "disabled";
    h2.textContent = texto
    h2.className = "luz";
    document.getElementById("texto").value = texto;
}

function Descriptografar() {
    let texto = document.getElementById("texto").value;
    console.log(texto);
    let letras = texto.split('');
    let index = 0;

    while (index < letras.length) {
        let letra = letras[index];

        if (letra == "e" && letras.slice(index, index + 5).join('') == "enter") {
            letras.splice(index + 1, 4);
        } else if (letra == "i" && letras.slice(index, index + 4).join('') == "imes") {
            letras.splice(index + 1, 3);
        } else if (letra == "a" && letras.slice(index, index + 2).join('') == "ai") {
            letras.splice(index + 1, 1);
        } else if (letra == "o" && letras.slice(index, index + 4).join('') == "ober") {
            letras.splice(index + 1, 3);
        } else if (letra == "u" && letras.slice(index, index + 4).join('') == "ufat") {
            letras.splice(index + 1, 3);
        } else {
            index++;
        }
    }
    texto = letras.toString();
    texto = texto.replace(/,/g, '')
    let imagem = document.getElementById("fotonice");
    let h2 = document.getElementById("niceh2");
    let p = document.getElementById("nicep");
    imagem.className = "disabled";
    h2.className = "disabled";
    p.className = "disabled";
    h2.textContent = texto
    h2.className = "luz";
    document.getElementById("texto").value = texto;
}
