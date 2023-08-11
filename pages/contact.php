<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/index.css">
    <title>Contact</title>
</head>

<body>
    <?php include("../components/nav.php")
    ?>
    <div id="main">
        <div id="container">
            <h1 id="h1_form">Contactez moi</h1>
            <form id="mon_formulaire">
                <div class="div_input">
                    <label for="name">Nom</label>
                    <input type="text" id="name" name="name">
                </div>

                <div class="div_input">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                </div>

                <div class="div_input">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="15"></textarea>
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    </div>
    <?php include("../components/liens_reseaux.php")
    ?>
    <script type="module" src="../assets/js/main.js"></script>


</body>

</html>