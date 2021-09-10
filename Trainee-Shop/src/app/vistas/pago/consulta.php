<?php
  // Declaramos el header como aplicación json y que interprete los caracteres especial UTF-8
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
 
  // Conectamos a la base de datos y hacemos un select
  $conn = new mysqli("http://54.221.130.211:3306/cliente/");
 
  $result = $conn->query("SELECT nombre_cliente FROM db_cliente.cliente where cliente_id=;");
 
  $outp = "";
  
  // Formateamos nuestro JSON
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
      if ($outp != "") {$outp .= ",";}
      $outp .= '{"Nombre":"'  . $rs["nombre"] . '",';
     
  }
  $outp ='{"records":['.$outp.']}';
  $conn->close();
 
  echo($outp);
?>