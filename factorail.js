<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
</head>
<body>

    <h2>Factorial Calculator</h2>

    <form id="factorialForm">
        <label for="number">Enter a number:</label>
        <input type="number" id="number" name="number" required>
        <button type="button" onclick="calculateFactorial()">Calculate</button>
    </form>

    <p id="result"></p>

    <script>
        function calculateFactorial() {
            let n = document.getElementById('number').value;
            let result = factorial(n);
            document.getElementById('result').innerText = `Factorial of ${n} is: ${result}`;
        } 

        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * factorial(n - 1);
        }
    </script>

</body>
</html>
