<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/index.css">
    <title>Projets</title>
</head>

<body>
    <?php include("../components/nav.php")
    ?>
    <div id="slider">
        <div id="div_projet">
            <img src="../images/carapuce.png" alt="carapuce" id="slide">
            <p>Projets </p>
        </div>
        <div id="precedent" onclick="ChangeSlide(-1)">
            < </div>
                <div id="suivant" onclick="ChangeSlide(1)">></div>


        </div>

    </div>

    <script src="../assets/js/slider/slider.js"></script>
    <script src="../assets/js/index.js"></script>
</body>

</html>