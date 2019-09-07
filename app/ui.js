function UI() {}

UI.prototype.showPosts = (posts) => {
  const post = document.querySelector('#posts');
  let output = '';

  posts.forEach((post) => {
    output += `
          <div class="card mb-3">
              <div class="card-body">
                  <h4 class="card-title>${post.title}</h4>
                  <p class="card-text>${post.body}</p>
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
  return (post.innerHTML = output);
};

export const ui = new UI();
