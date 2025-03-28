let openDiv = null;

  function toggleDiv(index) {
      const currentDiv = document.getElementById(`content-${index}`);

      if (openDiv && openDiv !== currentDiv) {
          openDiv.style.display = "none";
      }

      if (currentDiv.style.display === "block") {
          currentDiv.style.display = "none";
          openDiv = null;
      } else {
          currentDiv.style.display = "block";
          openDiv = currentDiv;
      }
  }





















    


    

