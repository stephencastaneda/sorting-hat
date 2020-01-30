
 const arrayOfStudents = []
 
 
 const hideJumbo=() => {
     document.getElementById('myJumbo').classList.add('invisible')
     document.getElementById('studentForm').classList.remove('invisible')
    }
    document.getElementById('startSorting').addEventListener('click',hideJumbo);
    
    
    
    const sortStudent = () => {
        document.getElementById('studentForm').classList.add('invisible')
        let name = document.getElementById('firstYearsName').value
        let randomhouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
        let houseNumber= Math.floor(Math.random()*randomhouse.length)
        let house=randomhouse[houseNumber]
        let id =Math.random().toString(36).substring(2, 8) 
        arrayOfStudents.push({name, house, id})
        console.log(arrayOfStudents)
        studentPrinter(arrayOfStudents)
        
    }

    const expelStudent = () => {
        const deleteId = object.id
    }
    
    
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint
      };
    
      const studentPrinter = (names) => {
          console.log("student print please")
        let domString = '';
        for(let i = 0; i< names.length; i++){
          domString += '<div class="col-md-6 col-lg-4 card-separation">'
          domString += '<div class="card">';
          domString += '  <div class="card-body">';
          domString += `    <h5 class="card-title">${names[i].name}</h5>`;
          domString += `    <p class="card-text">${names[i].house}</p>`;
          domString += `<button type="button" id="${names[i].id}" class="btn btn-light">Expel</button>`
          domString += '  </div>';
          domString += '</div>';
          domString += '</div>';
        }
        printToDom('allStudents', domString);
      };

      document.getElementById('sortButton').addEventListener('click', sortStudent)
