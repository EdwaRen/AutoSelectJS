(function() {
  alert("inserted self... giggity");

	// just place a div at top right
	var div = document.createElement('div');
  div.style.width = 100%;
  div.style.backgroundcolor = white;
  div.style.height = 100%;
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);


})();
