var selectedRow = null;

//form submit function
function formOnSubmit(){
    event.preventDefault();
    var formData = readFromData();
    if(selectedRow === null){
        insertNewRecord(formData)
    }else{
        updateUserInfo(formData);
    }

  resetForm();

}

//get data frome input field
function readFromData(){
    var formData = {}
    formData['name'] = document.getElementById('name').value;
    formData['address'] = document.getElementById('address').value;
    formData['phone'] = document.getElementById('phone').value;
    
    if (document.getElementById('male').checked) {
        genderValue = document.getElementById('male').value;
        formData['gender'] = genderValue
      }
    else if (document.getElementById('female').checked) {
        genderValue = document.getElementById('female').value;
        formData['gender'] = genderValue;
      }
      
      /* var hobbies ={}
      hobbies['cricket'] = document.getElementById('cricket').value; 
      hobbies['football'] = document.getElementById('football').value;
      formData['hobbies'] = hobbies['cricket']
      formData['hobbies'] = hobbies['football'] */      
      
    return formData;
}

//insert new data
function insertNewRecord(data){
  var table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  
  var cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.name;

  var cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.address;

  var cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.phone;

  var cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.gender;
  
      var cell5 = newRow.insertCell(4);
      cell5.innerHTML = data.hobbies;

  var cell6 = newRow.insertCell(5);
      cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;

}



//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('address').value = selectedRow.cells[1].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[2].innerHTML;
    document.getElementById('gender').innerText = selectedRow.cells[3].innerHTML;
}

function updateUserInfo(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.phone;
    
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}


//Reset the data
function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    
}



/* var gender = document.getElementById('gender').value;
var formData;
if(gender =='male'){
    formData = document.getElementById('male').value;
    
}else if(gender =='female'){
    formData = document.getElementById('female').value;
    
}   */

// document.getElementById('results').innerHTML = genderValue;