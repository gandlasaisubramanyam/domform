var div1=createDiv("div","class","box");
var div2=createDiv("div","class","row modified d-flex justify-content-between");
var div3=createDiv("div","class","col col1 col-sm-12 col-md-12 col-lg-3 m-2");
var div4=createDiv("div","class","col col-sm-12 col-md-12 col-lg-8 m-2");

function createDiv(tagname,attrname,attrvalue){
   var ele=document.createElement(tagname);
   ele.setAttribute(attrname,attrvalue)
   return ele;
}


     var form=createForm("form","class","form-group","id","form","method","POST");

     function createForm(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
       var ele=document.createElement(tagname);
       ele.setAttribute(attrname,attrvalue);
       ele.setAttribute(attrname1,attrvalue1);
       ele.setAttribute(attrname2,attrvalue2);
       return ele;
   }

   var h1tag=createH1("h1","id","title","Form Submission:")
   var br0=createlinebreak("br");

   var h1tag1=createH1("h1","id","title","Temporary DataBase")
   var br00=createlinebreak("br");
     function createH1(tagname,attrname,attrvalue,content){
       var ele=document.createElement(tagname);
       ele.setAttribute(attrname,attrvalue);
       ele.innerHTML=content;
       return ele;
   }






       //** Firstname

       var firstname=createlabels("label","for","first-name","<b>First Name :</b>");
       var br1=createlinebreak("br");
       var fnameinput=createinput("input","type","text","id","first-name","class","form-control","placeholder","Firstname");
       var br2=createlinebreak("br");
       
       //            //** lastname
       var lastname=createlabels("label","for","last-name","<b>Last Name :</b>");
       var br3=createlinebreak("br");
       var lnameinput=createinput("input","type","text","id","last-name","class","form-control","placeholder","Lastname");
       var br4=createlinebreak("br");
       
                 //** Address1
       var address1=createlabels("label","for","address","<b>Address :</b>");
       var br5=createlinebreak("br");
       var address01=createinput("textarea","type","text","id","address","class","form-control","placeholder","Address");
       var br6=createlinebreak("br");


                      //** Pincode
       var pincode=createlabels("label","for","pincode","<b>Pincode :</b>");
       var br9=createlinebreak("br");
             var pininput=createinput("input","type","number","id","pincode","class","form-control","placeholder","Pincode");
             var br10=createlinebreak("br");

 
       
                 //** radio button
       var radiobutton=createlabels("label","for","gender","<b>Gender :</b>");
       var br11=createlinebreak("br");
       var radiobutton1=createlabels("label","for","gender","Male");
       var radioinput1=createinput1("input","type","radio","id","gender","name","gender","value","Male","class","gender m-2 mb-2");
       var radiobutton2=createlabels("label","for","gender","Female");
       var radioinput2=createinput1("input","type","radio","id","gender","name","gender","value","Female","class","gender m-2 mb-2");
       var br12=createlinebreak("br");
       
                 //** checkBox button
       var checkBox=createlabels("label","for","food","<b>Choice of Food :</b>");
       var ptag=createPtag("p","id","description","<em>(must choose atleast 2 out of 5)</em>")
       var br13=createlinebreak("br");
       var checkbox1=createinput1("input","type","checkbox","name","food","value","south Indian","id","food","class","food m-2","South Indian");
       var checkBox1=createlabels("label","for","food","South Indian");
       var br14=createlinebreak("br");
       var checkbox2=createinput1("input","type","checkbox","name","food","value","North Indian","id","food","class","food m-2","North Indian");
       var checkBox2=createlabels("label","for","food","North Indian");

       var br15=createlinebreak("br");
       var checkbox3=createinput1("input","type","checkbox","name","food","value","Chinese","id","food","class","food m-2","Chinese");
       var checkBox3=createlabels("label","for","food","Chinese");

       var br16=createlinebreak("br");
       var checkbox4=createinput1("input","type","checkbox","name","food","value","Japanese","id","food","class","food m-2","Japanese");
       var checkBox4=createlabels("label","for","food","Japanese");

       var br17=createlinebreak("br");
       var checkbox5=createinput1("input","type","checkbox","name","food","value","Sea Food","id","food","class","food m-2","Sea Food");
       var checkBox5=createlabels("label","for","food","Sea Food");

       var br18=createlinebreak("br");
       var br19=createlinebreak("br");
        



       function createinput1(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4,content){
           var ele=document.createElement(tagname);
           ele.setAttribute(attrname,attrvalue);
           ele.setAttribute(attrname1,attrvalue1);
           ele.setAttribute(attrname2,attrvalue2);
           ele.setAttribute(attrname3,attrvalue3);
           ele.setAttribute(attrname4,attrvalue4);
           ele.innerHTML=content;
           return ele;
       }



                 //** state
       var statelabel=createlabels("label","for","state","<b>State :</b>");
       var br20=createlinebreak("br");
       var stateinput=createinput("input","type","text","id","state","class","form-control","placeholder","State");
       var br21=createlinebreak("br");

   

                 //** country
       var countrylabel=createlabels("label","for","country","<b>Country :</b>");
       var br22=createlinebreak("br");
       var countryinput=createinput("input","type","text","id","country","class","form-control","placeholder","Country");
       var br23=createlinebreak("br");

       function createinput2(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
           var ele=document.createElement(tagname);
           ele.setAttribute(attrname,attrvalue);
           ele.setAttribute(attrname1,attrvalue1);
           ele.setAttribute(attrname2,attrvalue2);
           ele.setAttribute(attrname3,attrvalue3);
           ele.setAttribute(attrname4,attrvalue4);
         
           return ele;
       }
       
               
                   //**** Button */
   var button1=createbutton1("button","type","submit","class","btn btn-primary text-light form-control","id","submit","Submit")
   var br20=createlinebreak("br");

   function createbutton1(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,content){
       var ele=document.createElement(tagname);
       ele.setAttribute(attrname,attrvalue);
       ele.setAttribute(attrname1,attrvalue1);
       ele.setAttribute(attrname2,attrvalue2);
       ele.innerHTML=content;
       return ele;
   }



       function createlabels(tagname,attrname,attrvalue,content){
       var ele=document.createElement(tagname);
       ele.setAttribute(attrname,attrvalue);
       ele.innerHTML=content;
       return ele;
       }
      
       
       function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
           var ele=document.createElement(tagname);
           ele.setAttribute(attrname,attrvalue);
           ele.setAttribute(attrname1,attrvalue1);
           ele.setAttribute(attrname2,attrvalue2);
           ele.setAttribute(attrname3,attrvalue3);
           return ele;
       }
       function createlinebreak(tagname){
       var ele=document.createElement(tagname);
       return ele;
       }
       function createPtag(tagname,attrname,attrvalue,content){
       var ele=document.createElement(tagname);
       ele.setAttribute(attrname,attrvalue);
       ele.innerHTML=content;
       return ele;
       }



form.append(h1tag,br0,firstname,br1,fnameinput,br2,lastname,br3,lnameinput,br4,address1,br5,address01,br6,pincode,br9,pininput,br10,radiobutton,br11,radioinput1,radiobutton1,radioinput2,radiobutton2,br12,br13,checkBox,ptag,checkbox1,checkBox1,br14,checkbox2,checkBox2,br15,checkbox3,checkBox3,br16,checkbox4,checkBox4,br17,checkbox5,checkBox5,br18,br20,statelabel,br20,stateinput,br21,countrylabel,br22,countryinput,br19,button1);




                 ///** */ Table
var table = createTable("table","class","table table-striped");
var thead = createThead("thead","class","bg-dark text-light");
var tbody = createTbody("tbody","id","tbody");
var trow1 = createTrow("tr");
var trow2= createTrow("tr");
var td1= createTd("td","First Name");
var td2= createTd("td","Last Name");
var td3= createTd("td","Address");

var td4= createTd("td","Pincode");
var td5= createTd("td","Gender");
var td6= createTd("td","Food");
var td7= createTd("td","State");
var td8= createTd("td","Country");

function createTable(tagName,attrName,attrValue){
var ele=document.createElement(tagName);
ele.setAttribute(attrName,attrValue);
return ele;
}

function createThead(tagName,attrName,attrValue){
var ele=document.createElement(tagName);
ele.setAttribute(attrName,attrValue);
return ele;
}

function createTbody(tagName,attrName,attrValue){
   var ele=document.createElement(tagName);
   ele.setAttribute(attrName,attrValue);
   return ele;
}
function createTrow(tagName){
   var ele=document.createElement(tagName);
   return ele;
}

function createTd(tagName,content){
   var ele=document.createElement(tagName);
   ele.innerHTML=content;
   return ele;
   }

table.append(thead,tbody);
thead.append(trow1);
trow1.append(td1,td2,td3,td4,td5,td6,td7,td8);

div4.append(h1tag1,br00,table)

div3.append(form);
div2.append(div3,div4);
div1.append(div2);

document.body.append(div1);

