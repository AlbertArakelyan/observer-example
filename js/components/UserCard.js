const UserCard = ({ name, username, email, phone }) => {
  return `
    <div class="card text-white bg-primary mb-3"">
      <div class="card-header">${name}</div>
      <div class="card-body">
        <h5 class="card-title">${username}</h5>
        <p class="card-text">${email}, ${phone}</p>
      </div>
    </div>
  `;
};

export default UserCard;