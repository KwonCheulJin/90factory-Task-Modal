'use strict'
let modal = {};

modal.basic = (target) => {
  const modalBasic = document.getElementById(target);
  const divBtn = document.createElement('div');
  const btnOpen = document.createElement('button');
  const divModal = document.createElement('div');
  const btnText = document.createTextNode('Open Modal');

  const divOverlay = document.createElement('div');
  const divContent = document.createElement('div');
  const divItem = document.createElement('div');
  const headOne = document.createElement('h1');
  const btn = document.createElement('button');
  const p = document.createElement('p');
  const nextP = document.createElement('p');
  const nextPTwo = document.createElement('p');
  const code = document.createElement('code');
  const title = document.createTextNode('Charles Modal👍');
  const btnIcon = document.createTextNode('❌');
  const textP = document.createTextNode('모달을 닫으려면 ')
  const textCode = document.createTextNode('ecs ')
  const textNextP = document.createTextNode('버튼을 누르거나 오버레이를')
  const textNextPTwo = document.createTextNode('클릭하거나 닫기 버튼을 클릭하십시오.')
  window.onload = () => {
    modalBasic.appendChild(divBtn);
    divBtn.classList.add("modal-button");
    divBtn.appendChild(btnOpen);
    btnOpen.appendChild(btnText);
    modalBasic.appendChild(divModal);
    divModal.classList.add("cs-modal-basic");
    const openBtn = modalBasic.querySelector(".modal-button button");
    const modal = modalBasic.querySelector(".cs-modal-basic");
    // console.log(modal);
    openBtn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.appendChild(divOverlay);
      divOverlay.classList.add("modal-overlay");
      modal.appendChild(divContent);
      divContent.classList.add("modal-content");
      divContent.appendChild(divItem);
      divItem.classList.add("cs-modal-item");
      divItem.appendChild(headOne);
      // console.log(divItem);
      headOne.appendChild(title);
      divItem.appendChild(btn);
      btn.appendChild(btnIcon);
      divItem.appendChild(p);
      p.appendChild(textP);
      p.classList.add("text");
      divItem.appendChild(code);
      code.appendChild(textCode);
      divItem.appendChild(nextP);
      nextP.appendChild(textNextP);
      nextP.classList.add("text-one");
      divItem.appendChild(nextPTwo);
      nextPTwo.appendChild(textNextPTwo);
      nextPTwo.classList.add("text-two");
    });
    const closeModal = () => {
      modal.classList.remove("show");
    }

    // const overlay = document.querySelector(".modal-overlay");
    // console.log(overlay);
    // console.log(closeBtn);
    divOverlay.addEventListener("click", closeModal);
    btn.addEventListener("click", closeModal);
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        modal.classList.remove("show");
      }
    })
  }





}