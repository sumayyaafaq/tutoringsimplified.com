
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      var dragged = document.getElementById(data);

      if (ev.target.classList.contains('drop-zone') && ev.target.children.length === 0) {
        ev.target.appendChild(dragged);
        ev.target.classList.add('filled');
      }
    }
