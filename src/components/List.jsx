export const List = (props) => {
  const { name, email } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};
