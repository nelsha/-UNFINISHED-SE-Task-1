const postlist = document.querySelector('.posts-list');
let output = '';

const token = 'fc730328-6337-42cf-a510-c274670cf193';
const url ='https://sistech-api.vercel.app/';

fetch(url, {
  headers: {
    'Authorization': 'Bearer $fc730328-6337-42cf-a510-c274670cf193'
  }
})
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      output +=
      <div class="card mt-4 col-md-6 bg-ligt">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Delete</a>
        </div>
      </div>;
    });
    postList.innerHTML = output;
  })