function CheckPrime(numbers) {
    if (numbers < 2 || numbers % 1 !== 0) {
        return "not prime nor a whole number"
    }
    if (numbers > 3) {
        for (i = 2; i <= numbers / 2; i++) {
            if (numbers % i == 0) {
                return "not prime";
            }
        }
        return "prime";
    } else {
        return "prime";
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function table(a) {
    var rows = a;
    var cells = a;
    document.write("<table>");
    for (i = 0; i <= rows; i++) {
        document.write("<tr>");
        for (j = 0; j <= cells; j++) {
            document.write("<td>", i + j, "</td>");
        }
        document.write("</tr>");
    }
    return ("</table>");

}
