

var myArr = [
["NW", "07", "025", "01", "W4"],
["SW", "19", "029", "25", "W4"],
["NE", "16", "040", "13", "W4"],
["SE", "34", "041", "08", "W4"],
["SW", "10", "057", "10", "W5"],
["SE", "14", "062", "04", "W4"],
["NE", "34", "059", "11", "W4"],
["NW", "21", "066", "22", "W4"],
["SW", "03", "060", "04", "W5"],
["NE", "18", "021", "18", "W4"],
["NW", "15", "084", "12", "W6"],
["SE", "05", "046", "25", "W4"],
["NW", "36", "066", "13", "W4"],
["NW", "35", "059", "15", "W4"],
["SW", "17", "020", "02", "W5"],
["SE", "03", "079", "08", "W6"],
["NW", "11", "104", "17", "W5"],
["NE", "35", "107", "14", "W5"],
["NW", "33", "080", "12", "W6"],
["SE", "23", "011", "11", "W4"],
["SE", "36", "064", "19", "W4"],
["SE", "06", "048", "04", "W5"],
["SE", "34", "019", "15", "W4"],
["NE", "23", "104", "15", "W5"],
["SE", "23", "064", "17", "W4"],
["NW", "16", "086", "15", "W5"],
["NW", "21", "072", "21", "W4"],
["SW", "14", "044", "21", "W4"],
["SW", "18", "036", "06", "W5"],
["NW", "06", "022", "25", "W4"],
["SW", "03", "038", "14", "W4"],
["SW", "29", "014", "23", "W4"],
["NE", "14", "024", "28", "W4"],
["PT", "33", "091", "22", "W4"],
["N2", "07", "072", "06", "W6"],
["NW", "22", "011", "26", "W4"],
["NE", "24", "087", "10", "W6"],
["SE", "13", "085", "10", "W6"],
["SW", "10", "022", "21", "W4"],
["SW", "23", "009", "20", "W4"],
["SW", "26", "062", "02", "W4"],
["NE", "07", "065", "22", "W4"],
["SE", "10", "077", "08", "W4"],
["SW", "15", "035", "06", "W4"],
["SW", "36", "036", "11", "W4"],
["SE", "26", "038", "08", "W5"],
["SW", "02", "065", "13", "W4"],
["SE", "20", "031", "16", "W4"],
["SW", "26", "035", "05", "W5"],
["SE", "26", "040", "05", "W5"],
["NW", "08", "007", "01", "W5"],
["SW", "03", "050", "10", "W5"],
["SE", "16", "045", "16", "W4"],
["SE", "02", "071", "01", "W6"],
["SW", "12", "084", "03", "W6"],
["NW", "13", "074", "13", "W6"],
["SE", "16", "054", "07", "W4"],
["NE", "11", "053", "05", "W4"],
["NW", "25", "031", "02", "W5"],
["SE", "12", "087", "24", "W5"],
["NE", "07", "063", "05", "W5"],
["NE", "36", "028", "20", "W4"],
["NW", "02", "012", "05", "W4"],
["NW", "34", "049", "08", "W5"],
["SW", "17", "065", "11", "W4"],
["SW", "36", "056", "07", "W4"],
["SW", "26", "008", "03", "W4"],
["NE", "18", "070", "11", "W6"],
["NW", "16", "014", "18", "W4"],
["SW", "23", "006", "09", "W4"],
["SW", "17", "086", "05", "W6"],
["SE", "03", "038", "07", "W5"],
["SW", "27", "082", "03", "W6"],
["NW", "15", "078", "21", "W5"],
["NE", "10", "043", "06", "W5"],
["SE", "07", "073", "10", "W5"],
["SE", "05", "058", "02", "W4"],
["NW", "36", "065", "02", "W5"],
["NW", "19", "006", "11", "W4"],
["NW", "34", "041", "15", "W4"],
["SW", "27", "112", "07", "W4"],
["SE", "36", "061", "05", "W4"],
["NW", "27", "088", "09", "W4"],
["SW", "11", "041", "14", "W4"],
["SE", "13", "023", "17", "W4"],
["SE", "28", "079", "12", "W5"],
["SW", "13", "022", "23", "W4"],
["SW", "04", "063", "09", "W4"],
["SE", "27", "061", "08", "W5"],
["NW", "04", "057", "08", "W6"],
["S2", "02", "073", "09", "W6"],
["SW", "10", "068", "18", "W4"],
["NW", "23", "009", "13", "W4"],
["NE", "32", "075", "14", "W5"],
["SW", "22", "069", "06", "W6"]
];
//the var above is the default input if none is entered

//Temp in case nothing is in the input field
var temp = "07";
var count = 0;

//Since the last two entries before starting are output and button in that order, they have are saved in separate variables for ease of use
var buttonID;
var buttonClass;
var outputClass;
var outputID;

//The string of the output to be displayed
var outputString;

//An array with either the ID or className
var elementIDs = [];
//We have two arrays for these because some html sites might only use classNames (or vice versa with div).
var elementClassNames = [];


var getCount = 0;

//RepeatAlert ensures that clicking the page after the selection process does not select any additional elements
var repeatAlert = false;


//Buttons in the (popup).html page  onclicks to the following functions
selectID() {
  alert("Hello there");

}

endSearch() {

}

//This will eventually get replaced by the 'selectID' and 'endSearch' functions.
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    //This is the escape key when pressed
    
    if (repeatAlert == true) {
      abortTimer();

      $('body').append(outputString).css('color', 'red').addClass('myclass');

    }
  } else if (evt.keyCode == 13) {
    alert("Enter pressed: " + outputString);

    if (buttonID != "" || buttonClass != "") {
      chrome.tabs.executeScript(tab.id, {code: "setTimeout(mySearch, 2000);"}
      , function(response) {

      });
      console.log("ENTERED");
      repeatAlert = true;

    }
  }
};

document.addEventListener('click', function(e) {
  // e.target.onclick;
  if (repeatAlert == false) {
    var newID = e.target.id;
    var newClass = e.target.className;

    if (newID == "") {
      elementClassNames.push(newClass);
      elementIDs.push("");
      buttonClass = newClass;
    } else {
      elementIDs.push(e.target.id);
      elementClassNames.push("");
      buttonID = newID;
    }

    getCount = getCount + 1;
    // alert("The id of this box is: " + buttonID);
  }
});

function mySearch() {

  for (x = 0; x < myArr[0].length; x++) {
    temp = myArr[count][x];
    var mySelect2 = document.getElementById(elementIDs[x]);
    var mySelect1 = document.getElementsByClassName(elementClassNames[x]);
    console.log(mySelect2, mySelect1);
    //Finds the option in the drop down menu and selects it
    if (mySelect2 != "") {
      for(var i, j = 0; i = mySelect2.options[j]; j++) {
        if (i.value == temp) {
          mySelect2.selectedIndex = "0" + j;

          break;
        }
      }
    } else if (mySelect1 != "") {
      for(var i, j = 0; i = mySelect1.options[j]; j++) {
        if (i.value == temp) {
          mySelect1.selectedIndex = "0" + j;
          break;
        }
      }
    }

    mySelect2.onchange()
  }
  buttonID = elementIDs[elementIDs.length-1];
  buttonClass = elementClassNames[elementClassNames.length-1]

  console.log("class: ", buttonClass, "id: ", buttonID);
  if (buttonID == "") {
    var list = document.getElementsByClassName(buttonClass)
    list[0].click();
  } else {
    document.getElementById(buttonID).click();
  }

  if (elementIDs[elementIDs.length-2] == "") {
    let textOutput = document.getElementsByClassName(elementClassNames[elementClassNames.length-2]).value;
    let textOutput2 = document.getElementsByClassName(elementClassNames[elementClassNames.length-2]).innerHTML;

    if (textOutput != "") {
      outputString = outputString + textOutput + "\n";
    } else {
      outputString = outputString + textOutput2 + "\n";
    }
  } else {
    let textOutput = document.getElementById(elementIDs[elementIDs.length-2]).value;
    let textOutput2 = document.getElementById(elementIDs[elementIDs.length-2]).innerHTML;
    console.log(textOutput, textOutput2)
    if (textOutput != "") {
      outputString = outputString + textOutput + "\n";
    } else {
      outputString = outputString + textOutput2 + "\n";
    }
  }
  // var buttons = document.getElementsByClassName()
  //These functions initiate requests to the third party web server and ultimately returns the coordinates
  count = count + 1;

  //The count variable can be adjusted to reflect the size of the input file
  if (count == 273) {
    abortTimer();
  } else {}
  tid = setTimeout(mySearch, 2000); // repeat myself

}

function abortTimer() { // to be called when you want to stop the timer
  clearTimeout(tid);
}

chrome.tabs.getSelected(null, function(tab){
    // chrome.tabs.executeScript(tab.id, {file: "insert.js"}
    // , function(response) {
    //
    // });
});

console.log(sec.options);
console.log("Hello");
