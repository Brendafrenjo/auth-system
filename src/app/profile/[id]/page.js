import "bootstrap/dist/css/bootstrap.min.css";

const UserProfile = ({ params }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Profile</h1>
      <hr />
      <p className="text-4xl">
        User Profile <span> {params.id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
