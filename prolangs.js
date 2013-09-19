// JavaScript kode
// var element_unordered_list = document.getElementById("first");
// alert (element_unordered_list);
// HTML(LiElement) UListElement
// element_unordered_list.style.color = "";

function outboxx(selectobj){
 var e_proglangs = document.getElementById("george");
 var e_outputbox = document.getElementById("beskjed");
 e_outputbox.innerHTML = "<h2>Du har valgt programmeringsspr&aring;ket</h2> " + e_proglangs.options[selectobj.selectedIndex].text;
}