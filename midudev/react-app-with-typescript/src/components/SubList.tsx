import { Sub } from "../interfaces/Interfaces";

interface Props {
  subs: Sub[];
}
const SubList = ({ subs }: Props) => (
  <ul>
    {subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={"Avatar for " + sub.nick} />
          <h4>
            {sub.nick} ( <small> mounts: {sub.subMonths} </small> )
          </h4>
          <p> {sub.description?.substring(0, 100)} </p>
        </li>
      );
    })}
  </ul>
);

export default SubList;
