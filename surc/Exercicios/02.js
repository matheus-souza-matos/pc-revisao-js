    // let numero = prompt;
        // let botao = document.getElementById("btn");
        // botao.onclick = () => {
        //     let numero = prompt("Digite um número");
        //     alert(numero + " Bazinga!")
        // }

        let btn = document.getElementById("btn");
        btn = document.addEventListener("click", () => {
            alert("Botão foi clicado");
        })

        document.getElementById("form").addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("test");
        })