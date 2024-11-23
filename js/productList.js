document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('authenticatedUser'));
    if (!user || !['admin', 'user'].includes(user.role)) {
        alert('Acesso negado. Faça login com uma conta autorizada.');
        window.location.href = 'signIn.html';
        return;
    }

    const welcomeMessage = document.querySelector('#welcomeMessage');
    welcomeMessage.innerHTML = `Bem-vindo, ${user.name} (${capitalize(user.role)}) <button id="logoutBtn">Logout</button>`;
    
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.onclick = () => {
        localStorage.removeItem('authenticatedUser');
        alert('Desconectado com sucesso.');
        window.location.href = 'signIn.html';
    };

    let products = JSON.parse(localStorage.getItem('products')) || [];
    const productTableBody = document.getElementById('productList');
    const pagination = document.getElementById('pagination');

    function displayProducts(products, page = 1, perPage = 10) {
        productTableBody.innerHTML = '';
        const start = (page - 1) * perPage;
        const end = start + perPage;
        const productsToDisplay = products.slice(start, end);

        productsToDisplay.forEach(product => {
            const row = document.createElement('tr');
            row.setAttribute('data-id', product.id);
            let imageSrc = product.image ? product.image : 'images/default-image.png';
            if (!imageSrc.startsWith('images/')) {
                imageSrc = 'images/' + imageSrc;
            }
            row.innerHTML = `
                <td>${product.id}</td>
                <td><img src="${imageSrc}" alt="${product.name}" style="width: 100px; height: 100px;"></td>
                <td>${product.name}</td>
                <td>${product.brand}</td>
                <td>${product.category}</td>
                <td>
                    <button class="view-details-btn">Ver Detalhes</button>
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">Excluir</button>
                </td>`;
            productTableBody.appendChild(row);
        });

        if (products.length > perPage) {
            pagination.style.display = 'block';
            const totalPages = Math.ceil(products.length / perPage);
            const pageButtons = Array.from(pagination.querySelectorAll('button'));
            pageButtons.forEach((button, index) => {
                if (index < totalPages) {
                    button.style.display = 'inline-block';
                    button.textContent = index + 1;
                    button.onclick = () => displayProducts(products, index + 1);
                } else {
                    button.style.display = 'none';
                }
            });
        } else {
            pagination.style.display = 'none';
        }
    }

    displayProducts(products);

    // Modal
    const editProductModal = document.getElementById('editProductModal');
    const cancelButton = document.querySelector('.cancel-button');

    productTableBody.onclick = (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            const productId = row.getAttribute('data-id');
            const confirmation = confirm("Tem certeza que deseja excluir este produto?");
            if (confirmation) {
                products = products.filter(product => product.id !== productId);
                localStorage.setItem('products', JSON.stringify(products));
                displayProducts(products);
            }
        }

        if (event.target.classList.contains('view-details-btn')) {
            const productId = event.target.closest('tr').getAttribute('data-id');
            localStorage.setItem('selectedProductId', productId);
            window.location.href = 'loadProducts.html';
        }

        if (event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            const productId = row.getAttribute('data-id');
            const product = products.find(p => p.id === productId);

            // Preencher o modal com os dados do produto
            document.getElementById('editProductName').value = product.name;
            document.getElementById('editProductBrand').value = product.brand;
            document.getElementById('editProductCategory').value = product.category;
            document.getElementById('editProductImage').value = product.image;

            // Mostrar o modal
            editProductModal.style.display = 'block';

           // Salvar alterações no produto
           document.getElementById("editProductForm").onsubmit = (e) => {
               e.preventDefault(); // Impede o envio padrão do formulário

               // Atualizar os dados do produto
               const updatedProduct = {
                   id: product.id,
                   name: document.getElementById("editProductName").value,
                   brand: document.getElementById("editProductBrand").value,
                   category: document.getElementById("editProductCategory").value,
                   image: document.getElementById("editProductImage").value || product.image
               };

               products = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
               localStorage.setItem('products', JSON.stringify(products));
               displayProducts(products); 

               // Fechar o modal após salvar
               editProductModal.style.display = 'none';
           };
       }
   };

   // Fechar o modal ao clicar no botão de fechar
   cancelButton.onclick = () => {
       editProductModal.style.display = 'none';
   };

   // Fechar o modal ao clicar fora do conteúdo do modal
   window.onclick = (event) => {
       if (event.target === editProductModal) {
           editProductModal.style.display = 'none';
       }
   };

   document.getElementById('addProductBtn').onclick = () => {
       window.location.href = 'createProduct.html';
   };

   document.getElementById('resetProductsBtn').onclick = () => {
       const initialProducts = [
           { id: '1', name: 'Guided by Voices - Bee Thousand', brand: 'Matador Records', category: 'CD', image: 'images/gbv-bee-thousand-cover.jpeg' },
           { id: '2', name: 'Pavement - Slanted and Enchanted', brand: 'Domino Recording Co', category: 'MP3', image: 'images/pavment-slanted-and-enchanted-cover.jpeg' },
           { id: '3', name: 'Neutral Milk Hotel T-Shirt', brand: 'Merge Records', category: 'T-Shirt', image: 'images/neutral-milk-hotel-in-the-aeroplane-over-the-sea-tshirt.jpeg' },
           { id: '4', name: 'Miles Davis', brand: 'Abril Cultural', category: 'Music - Disco', image: 'images/disco-jazz.jpg' },
           { id: '5', name: 'Legião Urbana', brand: 'Abril Cultural', category: 'Music - Disco', image: 'images/disco-legiao.jpg' },
           { id: '6', name: 'Guitar keychain', brand: 'no', category: 'Keychain', image: 'images/guitarra-chaveiro.jpg' },
           { id: '7', name: 'Metallica mug', brand: 'no', category: 'Mug', image:'images/metalica-caneca.jpg' },
           { id: '8', name:'Music keyboard ', brand:'Yamaha ', category:'Musical Instrument ', image:'images/teclado.jpg' },
           { id:'9 ', name:'Turntable ', brand:'no ', category:'Eletro - Disco ', image:'images/toca-discos.jpg' },
           { id:'10 ', name:'New Divide ', brand:'no ', category:'Rock - Disco ', image:'images/new-divide.jpg' }
       ];
       
       localStorage.setItem('products', JSON.stringify(initialProducts));
       displayProducts(initialProducts);
   };

   function createEditForm(product) {
       return `
           <tr data-id="${product.id}">
               <td>${product.id}</td>
               <td><img src="${product.image || 'images/default-image.png'}" alt="${product.name}" style="width: 100px; height: 100px;"></td>
               <td><input type="text" value="${product.name}" class="edit-name"></td>
               <td><input type="text" value="${product.brand}" class="edit-brand"></td>
               <td><input type="text" value="${product.category}" class="edit-category"></td>
               <td><input type="text" value="${product.image}" class="edit-image"></td>
               <td> 
                   <button class="save-btn">Salvar</button> 
                   <button class="cancel-btn">Cancelar</button> 
               </td> 
           </tr>`;
   }

   function capitalize(str) {
       return str.charAt(0).toUpperCase() + str.slice(1);
   }
});