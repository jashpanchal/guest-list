var names_of_people=[];
function entername(){

    glist=document.getElementById("in_name").value;
names_of_people.push(glist);
document.getElementById("names1").innerHTML=names_of_people;
document.getElementById("names2").innerHTML=names_of_people;
}
function sortname(){
    names_of_people.sort()
    document.getElementById("names1").innerHTML=names_of_people;
    document.getElementById("names2").innerHTML=names_of_people;
}
function searching(){
    var s= document.getElementById("in_search").value;
    var found=0;
    var j;
    for (j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("search").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}
