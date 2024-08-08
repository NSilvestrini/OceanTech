// Esta função é responsável por alternar o estado de um botão de opção (radio button) em um grupo de botões de opção. Quando um botão de opção é clicado, ela desmarca todos os outros botões de opção no grupo e, em seguida, marca o botão de opção clicado, permitindo que apenas um botão de opção seja selecionado por vez.

// Parâmetros:
// - event: Objeto do evento que desencadeou a chamada da função. Este parâmetro é opcional.
// - id: ID do botão de opção que foi clicado e deve ser alternado.

// Comportamento:
// 1. Obtém a referência para o botão de opção com o ID especificado.
// 2. Armazena o estado anterior do botão de opção (marcado ou não marcado).
// 3. Desmarca todos os botões de opção no grupo, percorrendo todos os elementos de entrada do tipo "radio" e definindo sua propriedade 'checked' como 'false'.
// 4. Se o botão de opção clicado não estava marcado anteriormente, marca-o.
// 5. Previne o comportamento padrão do evento, como a submissão de um formulário ou a navegação para uma nova página.

function toggleRadio(event, id) {
  const radio = document.getElementById(id);
  const wasChecked = radio.checked;

  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });

  if (!wasChecked) {
    radio.checked = true;
  }

  event.preventDefault();
}
