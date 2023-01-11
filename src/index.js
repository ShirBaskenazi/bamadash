const calc=((operand1, operand2, operator)=>{
    if((operand1!=NaN&&operand2!=NaN)&&(operand1>=1)&&(operand2>=1)){
        switch (operator){
            case "+":
                return (operand1+operand2);
            case "-":
                return(operand1-operand2);
            case "*":
                return(operand1*operand2)
            case "/":
                return(operand1/operand2);
        }

    }
        return("arrow");

})
alert(calc(2,3,"e"));