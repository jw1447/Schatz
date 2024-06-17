// Setzen Sie das Datum, das Sie verfolgen möchten
var countDownDate = new Date("Jan 24, 2022 18:00:00").getTime();

// Aktualisieren Sie den Zähler alle Sekunde
var x = setInterval(function() {

  // Holen Sie sich die aktuelle Zeit
  var now = new Date().getTime();
    
  // Finden Sie die Differenz zwischen jetzt und dem Zähldatum
  var distance = now - countDownDate;
    
  // Zeitberechnungen für Tage, Stunden, Minuten und Sekunden
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Ausgabe des Ergebnisses im Element mit id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
}, 1000);
