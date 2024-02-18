<?php
include('ghconfig.php');


  $url = "https://github.com/login/oauth/access_token";

  $params = array(
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'code' => $_GET["code"]
  );
  $postdata = "client_id=".$client_id."&client_secret=".$client_secret."&code=".$_GET["code"];

  $options = [
    'http' => [
        'header' => "Accept:application/json",
        'method' => 'POST',
        'content' => $postdata,
],
];

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  if ($result === false) {
    die("Url: " .$url ."  payload : ".$postdata);
  }

  echo $result;
?>

