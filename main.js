
 const arrayOfStudents = []
 
 
 const hideJumbo=() => {
     document.getElementById('myJumbo').classList.add('invisible')
     document.getElementById('studentForm').classList.remove('invisible')
    }
    document.getElementById('startSorting').addEventListener('click',hideJumbo);
    
    
    
    const sortStudent = () => {
        // document.getElementById('studentForm').classList.add('invisible')
        let name = document.getElementById('firstYearsName').value
        let randomhouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
        let houseNumber= Math.floor(Math.random()*randomhouse.length)
        let house=randomhouse[houseNumber]
        let id =Math.random().toString(36).substring(2, 8) 
        arrayOfStudents.push({name, house, id})
        console.log(arrayOfStudents)
        studentPrinter(arrayOfStudents)
        
    }
    document.getElementById('sortButton').addEventListener('click', sortStudent)

    

        
    
   
    // document.getElementById('expel').addEventListener('click', expelStudent)

    
  
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint
      };
    
      const studentPrinter = (names) => {
          console.log("student print please")
        
         
        let domString = '';
        for(let i = 0; i< names.length; i++){
          domString += '<div class="col-md-6 col-lg-4 card-separation">'
          domString += '<div class="card ">';
          domString += '<div class="card-body">';
          domString += `<h5 class="card-title">${names[i].name}</h5>`;
          domString += `<p class="card-text">${names[i].house}</p>`;
          domString += `<button type="button" class = "expel" id="${names[i].id}" class="btn btn-light">Expel</button>`
          domString += '  </div>';
          domString += '</div>';
          domString += '</div>';
        }
        printToDom('allStudents', domString);
        activateExpel();
        houseColor()
      };


      const houseColor = () => {
        // // const houseArray = []
        // // for (let i = 0; i <arrayOfStudents.length; i++) {

        // // let houseName = document.querySelector(".card-text").textContent; 
        // // houseArray.push(houseName);
        // //  console.log(houseArray);
        // }

        const elements = document.getElementsByClassName("card-text")

        for (let i = 0; i <elements.length; i++) {
         
          for (let i = 0; i <arrayOfStudents.length; i++) {
            console.log(arrayOfStudents[i].house);
           if (arrayOfStudents[i].house === 'Gryffindor') {
             elements[i].classList.add("red");
           } else if (arrayOfStudents[i].house === 'Hufflepuff') {
             elements[i].classList.add("blue");
           }
           else if (arrayOfStudents[i].house === 'Ravenclaw') {
             elements[i].classList.add("green");
           }
           else if (arrayOfStudents[i].house === 'Slytherin') {
             elements[i].classList.add("orange");
           };
          }
        }
      }
       
     
//id is targeted after click of expel button and check to see if it's equal to array of students id
      const expelStudent = (e) => {
        console.log(e);
        console.log(e.target.id)
        for (let i = 0; i < arrayOfStudents.length; i++) {
          if (e.target.id === arrayOfStudents[i].id){
            arrayOfStudents.splice(i, 1);
          };
        };
        studentPrinter(arrayOfStudents);
        console.log(arrayOfStudents);
      }
// each student is given a unique ID when the expel button is clicked
      const activateExpel = () => {
        let getButton = document.getElementsByClassName("expel")
        for (let i = 0; i < getButton.length; i++) {
          getButton[i].addEventListener('click', expelStudent)
        }
      }