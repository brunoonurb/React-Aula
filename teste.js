// const objetoNome = { nome: "brunoi", idade: 31, cidade: 'sjp' };

// const { nome, idade, cidade } = objetoNome;


// console.log(objetoNome.nome, objetoNome.idade, objetoNome.cidade);

// console.log(nome, idade, cidade);











// var array = [1,2,3,4,5,6,7,8,9];

// var novoArray = array.map((item)=>{
//   // console.log("print :",item);

//   return `meu item ${item}`
// })

// console.log(novoArray);



// let observacao = ""

// observacao = observacao! ?? "Erro na consulta (M)"


// console.log(observacao);



const pessoa = {nome:'bruno', idade:31, apelido:"bru", endereco:'sjs'}


const {endereco, idade} = pessoa

const newPessoa =  {pessoa, cidade: 'CUritiba', uf:'pr' }

console.log(endereco, idade);

console.log(newPessoa);