document.getElementById("calculatePerimeter").
addEventListener("click", calculate_perimeter);

function calculate_perimeter() {
    let lengthPerimeter = document.getElementById("lengthPerimeter").value;
    if (lengthPerimeter != "") {
        let calculate_perimeter = lengthPerimeter * 4;
        document.getElementById("outputPerimeter1").innerHTML="P = 4 × l";
        document.getElementById("outputPerimeter2").innerHTML="P = 4 × " + lengthPerimeter;
        document.getElementById("outputPerimeter3").innerHTML="P = " + calculate_perimeter;
    } else {
        document.getElementById("outputPerimeter1").innerHTML="Please input a number";
        document.getElementById("outputPerimeter2").innerHTML="";
        document.getElementById("outputPerimeter3").innerHTML="";
    }
}

function reset_perimeter() {
    document.getElementById("outputPerimeter1").innerHTML="";
    document.getElementById("outputPerimeter2").innerHTML="";
    document.getElementById("outputPerimeter3").innerHTML="";
}

document.getElementById("calculateArea").
addEventListener("click", calculate_area);

function calculate_area() {
    let lengthArea = document.getElementById("lengthArea").value;
    if (lengthArea != "") {
        let calculate_area = lengthArea * lengthArea;
        document.getElementById("outputArea1").innerHTML="A = l × l";
        document.getElementById("outputArea2").innerHTML="A = l × " + lengthArea;
        document.getElementById("outputArea3").innerHTML="A = " + calculate_area;
    } else {
        document.getElementById("outputArea1").innerHTML="Please input a number";
        document.getElementById("outputArea2").innerHTML="";
        document.getElementById("outputArea3").innerHTML="";
    }
}

function reset_area() {
    document.getElementById("outputArea1").innerHTML="";
    document.getElementById("outputArea2").innerHTML="";
    document.getElementById("outputArea3").innerHTML="";
}