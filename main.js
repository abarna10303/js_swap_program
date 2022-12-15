var firstvalue,secondvalue, temp;
function swap(firstvalue,secondvalue)
{
    temp=firstvalue;
    firstvalue=secondvalue;
    secondvalue=temp;
    document.write(firstvalue+"<br>");
    document.write(secondvalue);
}
swap("Subramaniyan","Abarna");