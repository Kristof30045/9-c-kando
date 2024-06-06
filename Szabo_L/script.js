function openModal() {
    let dialogus = document.getElementById("dialogus");

    dialogus.showModal();
  }

  function closeModal() {
    let dialogus = document.getElementById("dialogus");

    dialogus.close();
  }

  function onSubmit(event) {
    event.preventDefault();

    let pass = event.target.password.value;
    let email = event.target.email.value;

    if (pass && email) {
      alert("Sikeresen feliratkoztál hírlevelünkre!");
      event.target.submit();
    }
    else
      alert("Töltsd ki a mezőket!");
  }

  document.getElementById("sub").addEventListener("submit", onSubmit);