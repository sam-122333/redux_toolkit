import fakeUserData from "../api/index";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { clearAllUsers } from "../store/action/index";
import Listitem from "./Listitem";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  const deleteUser = () => {
    console.log(clearAllUsers(), "HI");
    dispatch(clearAllUsers());
  };

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">List of User Details</th>
              <th scope="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addNewUser(fakeUserData())}
                >
                  aad new user
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <Listitem />
          </tbody>
          <tfoot>
            <tr>
              <td scope="row"></td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser();
                  }}
                >
                  delete user
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default UserDetails;
