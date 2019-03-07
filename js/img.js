var images = [
  "https://arquiru.github.io/VictorRojasC/img/thumbs/01.jpg", "https://arquiru.github.io/VictorRojasC/img/thumbs/02.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/03.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/04.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/05.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/06.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/07.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/08.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/09.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/10.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/11.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/12.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/13.jpg","https://arquiru.github.io/VictorRojasC/img/thumbs/14.jpg",
  "https://arquiru.github.io/VictorRojasC/img/thumbs/15.jpg"
];

var gallery = document.getElementById("gallery");

for (var i = 0; i < images.length; i++) {
  var thumbnailWrapper = document.createElement("div");
  thumbnailWrapper.className = "thumbnail-wrapper";

  var thumbnail = document.createElement("a");
  thumbnail.className = "thumbnail";
  thumbnail.setAttribute('style', 'background-image:url(\"' + images[i] + '\");');
  thumbnail.setAttribute('href', images[i]);

  thumbnailWrapper.appendChild(thumbnail);
  gallery.appendChild(thumbnailWrapper);
}

console.log(gallery)