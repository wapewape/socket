function buttonClicked(){
  socket.emit('clicked');
  getShipments();
  document.getElementById("pedidos").style.visibility = "visible";
}

function getShipments() {
  
  fetch('https://queries-test.envia.com/guide/02/2023?status_id=1', {
    method: "GET",
    headers: {'Authorization': 'Bearer a02280a313a11f8c7aa88694c723e0aa86b51e040d75c8264803bb55d52d1b02'}
  })
  .then(response => response.json()
  ) 
  .then(json =>
     document.getElementById("detalles").innerHTML = json.data.length
    );
}


