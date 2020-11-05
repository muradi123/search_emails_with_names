let button  = document.querySelector('button'),
    inputValue = document.querySelector('input'),
    value = false;
        
        let fetchFunction = () =>{
        fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
               let objArray = data.data;
               let results = objArray.map(personName => personName.first_name);
               console.log(results)
               let n = results.includes(`${inputValues}`);
               if(n === true){
                  let index =  results.indexOf(`${inputValues}`);
                  let email = objArray.map(personName => personName.email);
                  let personMail = email[index];
                  let div = `<div>${personMail}</div>`
                  document.body.innerHTML += div;
                  console.log(index)
                  console.log(data.data)
               }
               else{
                  alert(`this name ${inputValues} doesnot exist`)
               } 
           });
        }

        button.addEventListener('click', ()=>{
            inputValues = inputValue.value;
            console.log(inputValues)
            inputValue.value = '';
            return new Promise ((resolve, reject)=>{
            value  = true;
            value === true ? resolve() : reject()   
        })

        .then(fetchFunction)
        .catch(() => console.warn('something went wrong'))
     })