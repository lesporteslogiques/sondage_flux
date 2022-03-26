<?php

// https://www.php.net/manual/fr/function.json-decode.php

//header("Content-Type: application/json; charset=utf-8");
//error_reporting(E_ALL);

$prob = "ok data saved";

$data = json_decode(file_get_contents("php://input"), false, 512, JSON_UNESCAPED_UNICODE);
if (is_null($data)) $prob = "no input - data not saved";
else {

    $file = "data_" . $data->{'unique_file_id'} . ".json";
    file_put_contents($file, json_encode($data));
}
echo $prob;

?>
