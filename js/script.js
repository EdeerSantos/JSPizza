document.addEventListener("DOMContentLoaded", () => {
    const topCartContainer = document.querySelector("#topCartContainer");
    const cart = document.querySelector("#cart");
    const addBtn1 = document.querySelector("#addBtn1");                 // Botão "+"" tela principal.
    const addBtn2 = document.querySelector("#addBtn2");                 //
    const addBtn3 = document.querySelector("#addBtn3");                 //
    const addBtn4 = document.querySelector("#addBtn4");                 //
    const addBtn5 = document.querySelector("#addBtn5");                 //
    const addBtn6 = document.querySelector("#addBtn6");                 //
    const cartItem = document.querySelector("#cartItem");               // Botão do carrinho tela principal.
    const addItem = document.querySelector("#addItem");                 // Botão "+" dentro do carrinho.
    const removeItem = document.querySelector("#removeItem");           // Botão "-" dentro do carrinho.
    const cartConfirmBtn = document.querySelector("#cartConfirmBtn");   // Botão de cornfirmação verde dentro do carrinho.
    const modal = document.querySelector("#modal");                          // Janela modal.
    const modalDecreaseBtn = document.querySelector("#modalDecreaseBtn");    // Botão "-" dentro da janela modal.
    const modalConfirmBtn = document.querySelector("#modalConfirmBtn");       // Botão "adicionar produto" na janela modal.
    const modalCancelBtn = document.querySelector("#modalCancelBtn");
    const modalAddBtn = document.querySelector("#modalAddBtn");

    let geralCounter = 0;   //  Contador do botão carrinho da janela principal.
    let cartCounter = 0;    //  Contador da janela do carrinho (aberta). 
    let modalCounter = 0;   //  Contador da janela do modal.

    topCartContainer.addEventListener("click", () => {  //  Evento de clique no botão do carrinho na página principal.
        cart.classList.toggle("active");
    });

    modalDecreaseBtn.addEventListener("click", () => {  //  Evento de clique no botão de deacréscimo no modal.
        decreaseModalCounter();
    });

    modalAddBtn.addEventListener("click", () => {       //  Evento de clique no botão de acréscimo no modal.
        increaseModalCounter();
    });

    modalConfirmBtn.addEventListener("click", () => {   //  Evento de clique no botão de confirmar pedido no modal.
        cart.classList.toggle("active");    // Abre a janela do carrinho.
        modal.classList.remove("active");   // Some o modal.
        increaseGeralCounterFromModal();    // Ao clicar em confirmar.
        cartItem.classList.toggle("active");    // Ativa o frame do item selecionado no carrinho.
        modalCounter = 0;
    });

    modalCancelBtn.addEventListener("click", () => {    // Evento de clique no botão de cancelar compra no modal.
        modal.classList.remove("active");   //  Remove a janela do modal.
        cartItem.classList.remove("active");    // Remove o frame do item selecionado.
        modalCounter = 0;   // Zera o contador dentro do modal, para quando abri-lo de novo não ficar acumulando.
    });

    addBtn1.addEventListener("click", () => {   // Botão de adição de itens.
        modal.classList.toggle("active");
        increaseModalCounter();
    });

    addBtn2.addEventListener("click", () => {   //
        modal.classList.toggle("active");
        increaseModalCounter();
    });

    addBtn3.addEventListener("click", () => {   //
        modal.classList.toggle("active");
        increaseModalCounter();
    });

    addBtn4.addEventListener("click", () => {   //
        modal.classList.toggle("active");
        increaseModalCounter();
    });

    addBtn5.addEventListener("click", () => {   //
        modal.classList.toggle("active");
        increaseModalCounter();
    });

    addBtn6.addEventListener("click", () => {   //
        modal.classList.toggle("active");
        increaseModalCounter();
    });

    addItem.addEventListener("click", () => {   // Evento de clique para adicionar +1 no contador do carrinho.
        increaseCounter();  // Função para adicionar +1 enquanto os itens não excederem <= 50.
    });

    removeItem.addEventListener("click", () => {    // Evento de clique para remover -1 no contador do carrinho.
        decreaseCartCounter();  // Função para remover -1 enquanto os itens forem maiores que 0.
    });

    cartConfirmBtn.addEventListener("click", () => {    // Evento de clique no botão de confirmação dentro do carrinho.
        increaseGeralCounterFromCart(); // Adiciona o resultado do contador de 1 até 50, que o usuário escolheu (número de itens).
        cart.classList.remove("active");    // Fecha o carrinho ao confirmar.
    });

    function decreaseModalCounter() {
        if (modalCounter > 0) {
            modalCounter--;
        }
        document.getElementById('modalCounter').innerText = modalCounter
    }

    function increaseModalCounter() {
        if (modalCounter < 50) {
            modalCounter++;
        }
        document.getElementById('modalCounter').innerText = modalCounter;
    }

    function increaseGeralCounter() {
        if (geralCounter < 50) {
            geralCounter++;
        }
        document.getElementById('geralCounter').innerText = geralCounter;
    }

    function increaseCounter() {
        if (cartCounter < 50) {
          cartCounter++;
        }
        document.getElementById('cartCounter').innerText = cartCounter;
    }

    function decreaseCartCounter() {
        if (cartCounter > 0) {
            cartCounter--;
        }
        document.getElementById('cartCounter').innerText = cartCounter;
    }

    function increaseGeralCounterFromModal() {
        if (modalCounter > 0) {
            geralCounter += modalCounter;
            cartCounter = 0;
            document.getElementById('geralCounter').innerText = geralCounter;
            document.getElementById('modalCounter').innerText = modalCounter;
        }
    }

    function increaseGeralCounterFromCart() {
        if (cartCounter > 0) {
        geralCounter += cartCounter;
        cartCounter = modalCounter;
        document.getElementById('geralCounter').innerText = geralCounter;
        document.getElementById('cartCounter').innerText = cartCounter;
        document.getElementById('modalCounter').innerText = modalCounter;
        }
    }
});