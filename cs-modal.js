
(function () {
  'use strict'
  const idModal = document.getElementById("modal");
  const idModalBasic = document.getElementById("modal-basic");

  window.onload = () => {
    if (idModal) {
      // 모달 작동 변수
      const modal = document.querySelector(".cs-modal");
      const closeBtn = modal.querySelector("button");
      const openBtn = document.querySelector(".modal-button button");
      const overlay = modal.querySelector(".modal-overlay");

      const closeModal = () => {
        modal.classList.remove("show");
      }

      openBtn.addEventListener("click", () => {
        modal.classList.add("show");
      });

      overlay.addEventListener("click", closeModal);
      closeBtn.addEventListener("click", closeModal);
      document.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
          modal.classList.remove("show");
        }
      })

    } else if (idModalBasic) {
      // 기본 모달창 item
      const modalBasic = document.querySelector(".cs-modal-basic");
      const openBtn = document.querySelector(".modal-button button");
      const overlay = modalBasic.querySelector(".modal-overlay");
      const item = document.querySelector(".cs-modal-item");
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
      const closeModal = () => {
        modalBasic.classList.remove("show");
      }

      openBtn.addEventListener("click", () => {
        modalBasic.classList.add("show");
        item.appendChild(headOne);
        // console.log(item);
        headOne.appendChild(title);
        item.appendChild(btn);
        btn.appendChild(btnIcon);
        item.appendChild(p);
        p.appendChild(textP);
        p.classList.add("text");
        item.appendChild(code);
        code.appendChild(textCode);
        item.appendChild(nextP);
        nextP.appendChild(textNextP);
        nextP.classList.add("text-one");
        item.appendChild(nextPTwo);
        nextPTwo.appendChild(textNextPTwo);
        nextPTwo.classList.add("text-two");
      });
      // console.log(closeBtn);
      overlay.addEventListener("click", closeModal);
      btn.addEventListener("click", closeModal);
      document.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
          modalBasic.classList.remove("show");
        }
      })
    }

  }

})();

