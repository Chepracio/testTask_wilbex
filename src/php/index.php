<?php
    header("Access-Control-Allow-Origin: *");

    ini_set('date.timezone', 'UTC');

    require_once 'config.php'; // Данные конфиг для подключения к бд

    $page = $_GET['activePage'];
    $count = $_GET['count'];
    $value_column = $_GET['valueColumn'];
    $value_conditions = $_GET['valueСonditions'];
    $filtration_values = $_GET['filtrationValues'];

    // подключаемся к бд
    $db = @new mysqli($config['host'], $config['user'], $config['pass'], $config['base']);
    if ($db->connect_errno) exit('Ошибка соединения');
    // устанавливаем кодировку
    $db->set_charset('utf8');

    $start = 0+$count*($page-1);

    if (!$filtration_values) {
        $req_data = "SELECT * FROM `testTask` LIMIT $start, $count";
        // Получаем общее количество строк в таблице
        $req_count = "SELECT COUNT(*) FROM `testTask`";

    } else {
        if ($value_column == 'title') {
            $like = '%'.$filtration_values.'%';
            $req_data = "SELECT * FROM `testTask` WHERE title LIKE '$like' LIMIT $start, $count";
            $req_count = "SELECT COUNT(*) FROM `testTask` WHERE title LIKE '$like'";
        } else {
            switch ($value_conditions) {
                case 'contains':
                    $like = '%'.$filtration_values.'%';
                    $req_data = "SELECT * FROM `testTask` WHERE $value_column LIKE '$like' LIMIT $start, $count";
                    $req_count = "SELECT COUNT(*) FROM `testTask` WHERE $value_column LIKE '$like'";
                    break;
                case 'more':
                    $req_data = "SELECT * FROM `testTask` WHERE $value_column > '$filtration_values' LIMIT $start, $count";
                    $req_count = "SELECT COUNT(*) FROM `testTask` WHERE $value_column > '$filtration_values'";
                    break;
                case 'less':
                    $req_data = "SELECT * FROM `testTask` WHERE $value_column < '$filtration_values' LIMIT $start, $count";
                    $req_count = "SELECT COUNT(*) FROM `testTask` WHERE $value_column < '$filtration_values'";
                    break;
                case 'equally':
                    $req_data = "SELECT * FROM `testTask` WHERE $value_column = '$filtration_values' LIMIT $start, $count";
                    $req_count = "SELECT COUNT(*) FROM `testTask` WHERE $value_column = '$filtration_values'";
                    break;
                default:
                break;
            }
        }
    }

    $get_data = $db->query($req_data);
    $data = array();
    while ($virt_arr = $get_data->fetch_assoc()){
        array_push($data, $virt_arr);
    };
    
    $get_count = $db->query($req_count);
    $count = array();
    while ($virt_arr = $get_count->fetch_assoc()){
        array_push($count, $virt_arr);
    };

    $request = json_encode(['count' => $count[0]['COUNT(*)'], 'data' => $data], JSON_UNESCAPED_UNICODE);
    print_r($request);

    $db->close();
?>