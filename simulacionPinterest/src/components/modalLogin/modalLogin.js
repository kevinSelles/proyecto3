import './modalLogin.css';

export function modalLogin () {
  const modal = document.createElement("div");
  modal.classList.add("modal-login");
  modal.innerHTML = `<div class="modal-content">
  <p>Para poder publicar, primero debe loguearse</p>
  <button id="closeModalLogin">Cancelar</button>
  </div>`

  document.body.appendChild(modal);

  modal.querySelector("#closeModalLogin").addEventListener("click", () => {
    modal.style.display = "none";
  });

  return modal;
}