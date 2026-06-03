import React from "react";

class User extends React.Component {
  render() {
    const { name, location } = this.props;

    return (
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">👩‍💻</div>

        <h2 className="text-2xl font-bold mb-4">
          Developer Profile
        </h2>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>

          <p>
            <span className="font-semibold">Role:</span> Frontend Developer
          </p>

          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>

          <p>
            <span className="font-semibold">Email:</span>
            {" "}payalgupta020405@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default User;











// import React from "react";

// class User extends React.Component {
//   render() {
//     const { name, location } = this.props;

//     return (
//       <div className="user-card">
//         <h2>Developer</h2>
//         <hr />
//         <p><strong>Name:</strong> {name}</p>
//         <p><strong>Role:</strong> Frontend Developer</p>
//         <p><strong>Location:</strong> {location}</p>
//         <p><strong>Email:</strong> payalgupta020405@gmail.com</p>
//       </div>
//     );
//   }
// }

// export default User;