// JavaScript kode

// Kode for valg av programeringsspråk

function outboxx(selectobj)
{
 var e_proglangs = document.getElementById("george");
 var e_outputbox = document.getElementById("beskjed");
 e_outputbox.innerHTML = "<h2>Du har selektert programmeringsspr&aring;ket:</h2> " + e_proglangs.options[selectobj.selectedIndex].text;
}

// Kode for linker som er under konstruksjon
function outoforder()
{
alert("Siden er desverre under oppbygging");
}