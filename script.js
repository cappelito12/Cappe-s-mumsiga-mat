document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const orderDetails = document.getElementById('order-details').value;

    fetch('/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, orderDetails })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Order sent successfully!');
              document.getElementById('order-form').reset();
          } else {
              alert('There was an issue submitting your order.');
          }
      }).catch(error => {
          console.error('Error:', error);
          alert('There was an issue submitting your order.');
      });
});
