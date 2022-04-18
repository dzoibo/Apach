<?php
//Include database configuration file
// include('../includes/connexion.php');

if(isset($_POST["state_id"]) && !empty($_POST["state_id"])){
    //Get all city data
    
    //Display cities list
        echo '<option value="">Selectionner votre ville</option>';
        echo '<option value="">Yaoundé</option>';
        echo '<option value="">Douala</option>';
        echo '<option value="">Ebolowa</option>';
}

if(isset($_POST["city_id"]) && !empty($_POST["city_id"])){
    //Get all city data
    
    //Display cities list
        echo '<option value="">Selectionner votre quartier</option>';
        echo '<option value="">Biteng</option>';
        echo '<option value="">Mendong</option>';
        echo '<option value="">Poste Centrale</option>';
}

?>