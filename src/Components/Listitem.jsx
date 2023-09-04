import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const Listitem = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const deleteUser = (index) => {
    dispatch(removeUser(index));
  };
  return (
    <>
      {data.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user}</td>
            <td>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  deleteUser(index);
                }}
              ></button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Listitem;
