import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   deleteing fetch data
        fetch(
          `https://coffee-store-server-mg2yljc1q-atiars-projects.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              const remaining = coffees.filter((col) => col._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body grid grid-cols-2">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions  flex-col">
          <button className="btn">view</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn">edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-300"
          >
            dele
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
