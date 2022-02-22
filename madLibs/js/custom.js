

$(document).ready(function(){
    function makeMadLib() {
      let noun = $("#noun").val()
        let adj = $("#adjective").val()
        let person = $("#person").val()
        let input = ( " hello " + person + " with a " + adj + noun )
        $("#story").append(input);
    }
     
      $("#lib-button").click(function(){
        makeMadLib()
      });
  });
  