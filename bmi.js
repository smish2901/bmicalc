<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="./style.css" type="text/css">
</head>
<body>
    <div class="container">
        <h1 class="title">BMI Calculator</h1>
        <div class="weight-wrapper">
            <label for="weight">Weight</label>
            <input type="number" name="weight-box" min="0" id="weight" class="input-box" placeholder="Kilograms">
        </div>
        <div class="height-wrapper">
            <label for="height">Height</label>
            <input type="number" name="height-box" min="0" id="height" class="input-box" placeholder="Centimeters">
        </div>
        <div class="result-wrapper">
            <div class="bmi">BMI</div>
            <p class="desc">Body Weight <span class="bmi-category"></span></p>
        </div>
    </div>
    <script src="./app.js" type="text/javascript"></script>
</body>
</html>
