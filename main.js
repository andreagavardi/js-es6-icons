
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone */


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/* Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
 */

icons.forEach(icon => {
    switch (icon.type) {           // Milestone 2 Coloriamo le icone per tipo
        case 'user':
            icon.color='violet';        //aggiungo una proprietà agli oggetti per specificarne il colore
            break;
        case 'animal':
            icon.color='blue';
            break;
        case 'vegetable':
            icon.color='orange';
            break;   
    }
    
    document.querySelector(".container").insertAdjacentHTML("beforeend",
    `
         <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
            <h3>${icon.name}</h3>
        </div>
    `);
  
})

//Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone 