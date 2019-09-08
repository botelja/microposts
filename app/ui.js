function UI() {
  this.post = document.querySelector('#posts');
  this.postTitle = document.querySelector('#title');
  this.postBody = document.querySelector('#body');
}

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

UI.prototype.clearAlert = function() {
  const currentAlert = document.querySelector('.alert');

  if (currentAlert) {
    currentAlert.remove();
  }
};

UI.prototype.clearFields = function() {
  this.postTitle.value = '';
  this.postBody.value = '';
};

export const ui = new UI();
