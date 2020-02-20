        var length = prompt;
        var width = prompt;

        function area(length, width) {
            return length * width;
        }
        function perimeter(length, width) {
            return 2*( length + width);
        }
        
        console.log("The area of your rectangle is " + area(length, width));         
        console.log("The perimeter of your rectangle is " + perimeter(length, width));
