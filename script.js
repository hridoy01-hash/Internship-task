var selectedRow = null;

//form submit function
function formOnSubmit(e){
    event.preventDefault();
    var formData = readFromData();
    if(selectedRow === null){
        insertNewUser(formData);
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
      
      
      let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
       formData['hobbies'] = []   
      for (var checkbox of markedCheckbox) {        
        formData['hobbies'].push(checkbox.value);
          
      }  
      
    return formData;
}

//insert new data
function insertNewUser(data){
  const table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);
  newRow.setAttribute("onclick",`onModal('${JSON.stringify(data)}')`);

  const cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.name;

  const cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.address;

  const cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.phone;

  const cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.gender;
  
   const cell5 = newRow.insertCell(4);
      cell5.innerHTML = data.hobbies;

  const cell6 = newRow.insertCell(5);
      cell6.innerHTML = `<button onClick='editUserInfo(this)'>Edit</button> <button onClick='deleteUser(this)'>Delete</button>`;

}



//Edit the data
function editUserInfo(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('address').value = selectedRow.cells[1].innerHTML;
    document.getElementById('phone').value = selectedRow.cells[2].innerHTML;
    document.getElementById('gender').innerText = selectedRow.cells[3].innerHTML;
    document.getElementById('hobbies').innerText = selectedRow.cells[4].innerHTML;
}

function updateUserInfo(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerText = formData.gender; 
    selectedRow.cells[4].innerText = formData.hobbies; 
    
}

//Delete the data
function deleteUser(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Modal function
function onModal(data){
  let trData = JSON.parse(data);
  document.getElementById('userName').innerText = trData.name;
  console.log(trData.name)
}


//Reset the data
function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    selectedRow = null;    
}

