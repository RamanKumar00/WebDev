<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Elements Alert</title>
    <script>
        function showFormElements() {
            
            var formElements = document.forms["myForm"].elements;
            
            
            for (var i = 0; i < formElements.length; i++) {
                var element = formElements[i];
                alert("Element Type: " + element.type + "\n" + 
                      "Element Name: " + element.name + "\n" + 
                      "Element Value: " + element.value);
            }
        }
    </script>
</head>
<body>

    <form name="myForm">
        Name: <input type="text" name="name"><br>
        Age: <input type="number" name="age"><br>
        Gender: 
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female<br>
        Country: 
        <select name="country">
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
        </select><br>
        <input type="button" value="Submit" onclick="showFormElements()">
    </form>

</body>
</html>
