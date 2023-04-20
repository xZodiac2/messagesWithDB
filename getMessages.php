<?php

    $db = new mysqli('localhost', 'root', 'mysql', 'messages');
    $data = $db->query("SELECT * FROM `messages`");

    $messages = mysqli_fetch_all($data);
    $messagesArr = [];

    foreach($messages as $message) {
        array_push($messagesArr, array(
            "userName" => $message[1],
            "message" => $message[2]
        ));
    }

    print_r(json_encode($messagesArr, JSON_UNESCAPED_UNICODE))

?>
