class Fornecedor {
    constructor(nome, razao, cnpj) {
      this.nome = nome;
      this.razao = razao;
      this.cnpj = cnpj;
    }
  }
  
  class UI {
    static displayFornecedores() {
      const fornecedores = Store.getFornecedores();
  
      fornecedores.forEach((fornecedor) => UI.addFornecedorToList(fornecedor));
    }
  
    static addFornecedorToList(fornecedor) {
      const list = document.querySelector('#fornecedor-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${fornecedor.nome}</td>
        <td>${fornecedor.razao}</td>
        <td>${fornecedor.cnpj}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteFornecedor(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  

  
    
  
    static clearFields() {
      document.querySelector('#nome').value = '';
      document.querySelector('#razao').value = '';
      document.querySelector('#cnpj').value = '';
    }
  }
  
  class Store {
    
  
    static addFornecedor(fornecedor) {
      const fornecedores = Store.getFornecedores();
      fornecedores.push(fornecedor);
    }
  
    static removeFornecedor(isbn) {
      const fornecedores = Store.getFornecedores();
  
      fornecedores.forEach((fornecedor, index) => {
        if(fornecedor.isbn === isbn) {
          fornecedores.splice(index, 1);
        }
      });
  
    }
  }
  
  document.addEventListener('DOMContentLoaded', UI.displayFornecedores);
  
  document.querySelector('#fornecedor-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nome = document.querySelector('#nome').value;
    const razao = document.querySelector('#razao').value;
    const cnpj = document.querySelector('#cnpj').value;
  
    if(nome === '' || razao === '' || cnpj === '') {
    } else {
      const fornecedor = new Fornecedor(nome, razao, cnpj);
  
      UI.addFornecedorToList(fornecedor);
  
      Store.addFornecedor(fornecedor);

  
      UI.clearFields();
    }
  });
  
  document.querySelector('#fornecedor-list').addEventListener('click', (e) => {
    UI.deleteFornecedor(e.target);
  
    Store.removeFornecedor(e.target.parentElement.previousElementSibling.textContent);
  
  });

 