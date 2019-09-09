function UI() {
  this.post = document.querySelector('#posts');
  this.titleInput = document.querySelector('#title');
  this.bodyInput = document.querySelector('#body');
  this.idInput = document.querySelector('#id');
  this.postSubmit = document.querySelector('.post-submit');
  this.postState = 'add';
}

// Show all posts
UI.prototype.showPosts = function(posts) {
  let output = '';

  posts.forEach((post) => {
    output += `
          <div class="card mb-3">
              <div class="card-body">
                  <h4 class="card-title">${post.title}</h4>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                  </a>
                  <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                  </a>
              </div>
          </div>
        `;
  });
  this.post.innerHTML = output;
};

// Show alert message
UI.prototype.showAlert = function(message, className) {
  this.clearAlert();

  // Create a div element
  const div = document.createElement('div');
  // Add classes
  div.className = className;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.postsContainer');
  // Get posts
  const posts = document.querySelector('#posts');
  // Insert alert div
  container.insertBefore(div, posts);

  //Timeout
  setTimeout(() => {
    this.clearAlert();
  }, 3000);
};

// Clear Alert message
UI.prototype.clearAlert = function() {
  const currentAlert = document.querySelector('.alert');

  if (currentAlert) {
    currentAlert.remove();
  }
};

// Clear all fields
UI.prototype.clearFields = function() {
  this.titleInput.value = '';
  this.bodyInput.value = '';
};

// Clear ID from hidden field
UI.prototype.clearIdInput = function() {
  this.idInput.value = '';
};

// Fill form to edit
UI.prototype.fillForm = function(data) {
  this.titleInput.value = data.title;
  this.bodyInput.value = data.body;
  this.idInput.value = data.id;

  this.changeFormState('edit');
};

// Change the form state
UI.prototype.changeFormState = function(type) {
  if (type === 'edit') {
    this.postSubmit.textContent = 'Update Post';
    this.postSubmit.classList = 'post-submit btn btn-warning btn-block';

    // Create cancel button
    const button = document.createElement('button');
    button.className = 'post-cancel btn btn-light btn-block';
    button.appendChild(document.createTextNode('Cancel Edit'));

    // Get parent
    const cardForm = document.querySelector('.card-form');
    // Get elemetn to insert before
    const formEnd = document.querySelector('.form-end');
    // Insert cancel button
    cardForm.insertBefore(button, formEnd);
  } else {
    this.postSubmit.textContent = 'Post It';
    this.postSubmit.classList = 'post-submit btn btn-primary btn-block';
    // Remove cancel button if is there
    if (document.querySelector('.post-cancel')) {
      document.querySelector('.post-cancel').remove();
    }
    // Clear ID from hidden field
    this.clearIdInput();
    // Clear all fields
    this.clearFields();
  }
};

export const ui = new UI();
