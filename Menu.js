let opcao = prompt(
    "Escolha uma bebida:\n" +
    "1 - Café\n" +
    "2 - Chá\n" +
    "Digite o numero de opcoes:" 
);

switch (opcao) {
    case "1":
        alert("Você escolheu café");
        break;

    case "2":
        alert("Você escolheu chá");
        break;
        
     default:
        alert("Opcao invalida!");
    }