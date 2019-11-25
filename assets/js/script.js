var g = document.getElementById('canvas');
//Création d'un objet CanvasRenderingContext2D
var gl = g.getContext('2d');

// conde de la glace
gl.fillStyle = "#AA6522";
gl.beginPath(); //Début du chemin
gl.moveTo(150, 150); // Se déplacer à la position
gl.lineTo(200, 280);  // Tracer une ligne jusqu'à la position
gl.lineTo(250, 150); // Tracer une ligne jusqu'à la position
gl.closePath();     // Fermeture du chemin
gl.fill();

// glace
gl.fillStyle = "#8a230f"
gl.beginPath();
gl.moveTo(150, 150);
gl.bezierCurveTo(200,60,230,60,250,150); //courbe
gl.lineTo(250, 150);
gl.fill();
