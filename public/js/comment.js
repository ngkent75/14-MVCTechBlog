const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#blog-comm').value.trim();

  if (comment) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blog/:id');
    } else {
      console.log('Failed to load comment');
    }
  }
};


document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);
