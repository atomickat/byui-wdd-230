function adjustSlide(stormSeverity) {
      document.getElementById("ratingvalue").innerHTML = stormSeverity;
    }

    function selectResponse() {
      const s = document.querySelector('#selected')
      const sel = document.querySelector('#selectbrowser');
      s.style.display = "block";
      s.textContent = sel.value;
    }