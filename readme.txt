Side for introdusering av de mest brukte programmeringsspr�k.

Lab 4.html - Html filen med hoved kodingen til Programmeringslisten
Lab 4.css - Filen som anngir utseende og designet for listen
bluesprite.jpg - Sprite image filen som er en del av utsende
jquery.scrollTo-1.4.3.1-min.js - gir mulighet for scroll funksjonen i jquery
jquery-1.8.1.js - jquery biblioteket
proglangs.html - Hovedside for websiden 
proglangs.js - Javascript biblioteket for proglangs.html 
proglangs.css - Stiler for websiden
readme.txt - inneholdsfortegnelsen og oppgaver knyttet til spr�kene

Oppgave 18/09/2013
Forklar hvilken deler av din applikasjon s� langt, implementerer de forskjellige lagene i MVC arkitekturen. MVC st�r f�r ModelViewController,
som til norsk kan oversettes til ModellPresentasjonKontorller.

Svar: 	Model er HTML filen der dataen holdes.
	View er CSS filen som bestemmer hvordan siden skal vises.
	Controller er JavaScript filen som kontrollerer hva som skal vises av informasjonen i HTML filen.
	Poenget er � gj�re ting mer oversiktlig og redusere repetisjonen av data.



Oppgaver:
0) Les introduksjon til JavaScript p� http://w3schools.com/js/js_intro.asp og svar p� f�lgende sp�rsm�l, � hva kan JavaScript brukes til?

Svar: JavaScript kan brukes til � manipulere elementer i et HTML dokument.
Det er mest brukt til � validere input.

1) Les minst de to gitte linkene og forklar med dine egne ord forskjell p� CSS id og class
elementer http://www.tizag.com/cssT/cssid.php
http://css�tricks.com/the�difference�between�id�and�class/

Svar: CSS id er en unik og kan bare brukes en gang p� et element, mens CSS class er designet for � brukes p� flere elementer. 

2) Vurder og sammenlign brukbarhet til versjoner i deloppgave 0 og deloppgave 1 av designet for presentasjon av en liste (ta utgangspunkt at listen er mye lengre enn vist i skjermbildene, over 100 elementer).

Svar: CSS class er spesielt designet til mange elementer og dermed er det brukbart. Javascript er mulig � manipulere inn en lettere

3) Med hvilken HTML teknikk og designl�sning l�ser Wikipedia
(http://en.wikipedia.org/wiki/List_of_programming_languages) problemstilling med en lang liste av programmeringsspr�k?

Svar:  Wikipedia sorterer spr�kene i bredden, og har en snarvei til hver bokstav �verst for brukervennlighet. De bruker Javascript i sin HTML kode.

4) Ved � s�ke p� WWW finn ut selv og forklar kort hva som er hovedforskjeller mellom et
<div> og et <span> element (tagg) i HTML.

<span> har ingen spesiell betydning bortsett fra � skape et element � skrive i, samtidig som man kan skrive i taggen for � forandre p� teksten.
<div> kan i likhet med <span> brukes til et element � skrive i, samtidig som den vil gi et avsnitt f�r og etter. Den brukes gjerne i st�rre deler av et html dokument, som gj�r at den blir nyttig ved bruk av CSS til � forandre stilen. Den brukes ofte for � definere dokument layoutet. 

5) Hvike brukbarhetsproblemer er det med den siste versjonen av implementeringen i
deloppgaven 2? Nevn gjerne hvordan man kunne l�se problemene. (Tips: overlapp mellom
forskjellige grafiske elementer og tilfelle hvor man �nsker � selektere det f�rste navnet p�
programmeringssp�rket i listen)
Svar:  
