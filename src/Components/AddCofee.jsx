import Swal from "sweetalert2";

const AddCofee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);
    // send data  to the server
    fetch(
      "https://coffee-store-server-mg2yljc1q-atiars-projects.vercel.app/coffee",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "coffee added successfully!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div>
      {/* <link to='/'><span>go to home</span></link> */}
      <div className="bg-[#F4F3F0] p-24">
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold">Add New Coffee</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Vero nostrum odit animi nam a, quibusdam earum corporis impedit.
            Velit, id.
          </p>
        </div>
        <form onSubmit={handleAddCoffee} className="w-1/2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Avaliable Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Avaliable Quantity"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
          </div>
          <div className="form-control my-8">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className="input input-bordered w-full"
                id=""
              />
            </label>
          </div>
          <input
            className="btn btn-success w-full"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCofee;
